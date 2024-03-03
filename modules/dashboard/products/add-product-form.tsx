import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/form";
import { Input } from "@/ui/input";
import { z } from "zod";
import { Textarea } from "@/ui/textarea";
import { AddProductImage } from "./add-product-image";
import { useCreateProduct } from "./useProducts";
import { useDashboard } from "../context-store";

export const AddProductForm = ({ callback }: { callback: () => void }) => {
  const { store } = useDashboard();
  const { mutate, isPending } = useCreateProduct(callback);

  const [images, setImages] = useState<File[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: 0,
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!store) return;

    const formData = new FormData();

    for (const image of images) {
      formData.append("images", image);
    }
    for (const key in values) {
      formData.append(key, (values as any)[key]);
    }

    formData.append("storeId", store.id);

    mutate({ data: formData });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 px-1">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter product title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter product price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter product description" {...field} rows={4} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <AddProductImage files={images} setFiles={setImages} />

        <Button type="submit" className="self-end mt-5" isLoading={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
};

const formSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(100, { message: "Name must be at most 100 characters long" }),
  price: z.coerce
    .number({ invalid_type_error: "Price must be a number" })
    .nonnegative({ message: "Price must be a positive number" }),
  description: z.string(),
});
