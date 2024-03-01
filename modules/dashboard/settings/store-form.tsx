"use client";

import React from "react";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
import { Button } from "@/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateStore } from "./useSettings";

export const StoreForm = ({ store }: { store: Store | undefined }) => {
  const name = store?.name || "";
  const description = store?.description || "";

  const { mutate: update, isPending: isUpdating } = useUpdateStore();
  const { mutate: create, isPending: isCreating } = useUpdateStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name, description },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    if (store) {
      update(data);
    } else {
      create(data);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 max-w-lg">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} rows={4} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <Button className="mt-5" type="submit" isLoading={isUpdating || isCreating}>
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Shop name must be at least 3 characters long" })
    .max(50, { message: "Shop name too long" }),
  description: z.string(),
});
