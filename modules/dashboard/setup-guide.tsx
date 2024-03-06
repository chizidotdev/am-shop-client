"use client";
import React from "react";
import { Text } from "@/ui/text";
import { Checkbox } from "@/ui/checkbox";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui/accordion";
import { Button, buttonVariants } from "@/ui/button";
import Link from "next/link";
import { OpayLink } from "@/common/opay-link";
import { useDashboard } from "./context-store";

export const SetupGuide = () => {
  const { isFetchingStore, isFetchingProducts } = useDashboard();
  const { setupOptions, nextItemIdx } = useSetupOptions();

  if (isFetchingStore || isFetchingProducts) {
    return null;
  }

  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <Text variant="h3">Setup Guide</Text>
        <Text>Follow these steps to get started with your new store.</Text>
      </CardHeader>
      <CardContent className="border-t px-0 pb-0">
        <Accordion type="single" collapsible defaultValue={`item-${nextItemIdx}`}>
          {setupOptions.map((option, index) => (
            <AccordionItem
              value={`item-${index}`}
              key={index}
              className="px-6 [&:last-child]:border-none"
            >
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <Checkbox checked={option.checked} />
                  <Text variant="h4">{option.title}</Text>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Text>
                  {option.description}
                  <span>
                    <Link
                      href={option.learnMoreLink}
                      className={buttonVariants({ variant: "link" })}
                    >
                      Learn more
                    </Link>
                  </span>
                </Text>
                <div className="flex gap-3 mt-5">
                  <Link href={option.action.link}>
                    <Button>{option.action.text}</Button>
                  </Link>
                  {option.secondaryAction && (
                    <Link href={option.secondaryAction.link}>
                      <Button variant="outline">{option.secondaryAction.text}</Button>
                    </Link>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

type Action = { link: string; text: string };
type SetupOption = {
  checked: boolean;
  title: string;
  description: string;
  learnMoreLink: string;
  action: Action;
  secondaryAction: Action | null;
};
const useSetupOptions = () => {
  const { store, products } = useDashboard();

  const setupOptions: SetupOption[] = [
    {
      title: "Customize your store",
      description: "Add a logo, name, description, and social media links to your store.",
      learnMoreLink: "",
      action: { link: "/dashboard/settings", text: "Customize" },
      secondaryAction: null,
      checked: !!store && !!store.name,
    },
    {
      title: "Add your first product",
      description: "Write a description, set a price, and upload a photo for your first product.",
      learnMoreLink: "",
      action: { link: "/dashboard/products", text: "Add Product" },
      secondaryAction: { link: "/dashboard/products", text: "Connect Vendor" },
      checked: !!products.length,
    },
    {
      title: "Set up payments",
      description: "Connect your Opay account to start accepting payments.",
      learnMoreLink: "",
      action: { link: "/connect-payment", text: "Connect Payment" },
      secondaryAction: null,
      checked: false,
    },
    {
      title: "Launch your store",
      description: "Share your store with the world and start selling.",
      learnMoreLink: "",
      action: { link: "/launch-store", text: "Launch store" },
      secondaryAction: null,
      checked: false,
    },
  ];

  const nextItem = setupOptions.find((option) => !option.checked);
  const nextItemIdx = setupOptions.findIndex((option) => !option.checked);

  return {
    setupOptions,
    nextItemIdx,
    nextItem,
  };
};
