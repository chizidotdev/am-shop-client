"use client";
import React from "react";
import { Text } from "@/ui/text";
import { Checkbox } from "@/ui/checkbox";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui/accordion";
import { Button, buttonVariants } from "@/ui/button";
import Link from "next/link";
import { OpayLink } from "@/common/opay-link";

export const SetupGuide = () => {
  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <Text variant="h3">Setup Guide</Text>
        <Text>Follow these steps to get started with your new shop.</Text>
      </CardHeader>
      <CardContent className="border-t px-0 pb-0">
        <Accordion type="single" collapsible defaultValue="item-2">
          {setupOptions.map((option, index) => (
            <AccordionItem
              value={`item-${index + 1}`}
              key={index}
              className="px-6 [&:last-child]:border-none"
            >
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <Checkbox checked={index === 0} />
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
const setupOptions: {
  title: string;
  description: string;
  learnMoreLink: string;
  action: Action;
  secondaryAction: Action | null;
}[] = [
  {
    title: "Add your first product",
    description: "Write a description, set a price, and upload a photo for your first product.",
    learnMoreLink: "https://www.example.com",
    action: { link: "/add-product", text: "Add Product" },
    secondaryAction: { link: "/import-products", text: "Import Products" },
  },
  {
    title: "Customize your shop",
    description: "Add a logo, name, description, and social media links to your shop.",
    learnMoreLink: "https://www.example.com",
    action: { link: "/customize", text: "Customize" },
    secondaryAction: null,
  },
  {
    title: "Set up payments",
    description: "Connect your Opay account to start accepting payments.",
    learnMoreLink: "https://www.example.com",
    action: { link: "/connect-payment", text: "Connect Payment" },
    secondaryAction: null,
  },
  {
    title: "Launch your shop",
    description: "Share your shop with the world and start selling.",
    learnMoreLink: "https://www.example.com",
    action: { link: "/launch-shop", text: "Launch Shop" },
    secondaryAction: null,
  },
];
