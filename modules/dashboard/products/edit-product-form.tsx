import React, { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/ui/button";
import { Switch } from "@/ui/switch";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/form";
import { Input } from "@/ui/input";
import { z } from "zod";
import { Textarea } from "@/ui/textarea";
import { AddProductImage } from "./add-product-image";
import { useUpdateProduct } from "./useProducts";
import { useDashboard } from "../context-store";
import { FilePond } from "react-filepond";

export const EditProductForm = ({
  callback,
  product,
}: {
  product: Product;
  callback: () => void;
}) => {
  const { store } = useDashboard();
  const { mutate, isPending } = useUpdateProduct(callback);

  const imageRef = useRef<FilePond>(null);
  const [images, setImages] = useState<File[]>([]);
  useEffect(() => {
    const imageUrl = product.images[0]?.url;
    if (imageUrl && imageRef.current) {
      // imageRef.current.addFile(imageUrl);
    }
  }, [product]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: product.title,
      price: product.price,
      description: product.description,
      outOfStock: product.outOfStock,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!store) return;

    mutate({ id: product.id, storeId: store.id, data: values });
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
                <Input icon="₦" type="number" placeholder="Enter product price" {...field} />
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

        <AddProductImage ref={imageRef} files={images} setFiles={setImages} />

        <FormField
          control={form.control}
          name="outOfStock"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Out of Stock?</FormLabel>
              </div>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />

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
  outOfStock: z.boolean(),
});
