import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { FormDescription, FormItem, FormLabel } from "@/ui/form";
import { forwardRef, useRef } from "react";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

type AddProductImageProps = {
  files: File[];
  setFiles: (files: File[]) => void;
};
export const AddProductImage = forwardRef<FilePond, AddProductImageProps>(
  ({ files, setFiles }, ref) => {
    return (
      <FormItem>
        <FormLabel>Images</FormLabel>
        <FilePond
          ref={ref}
          files={files}
          onupdatefiles={(files) => setFiles(files.map((file) => file.file as File))}
          className="product-image-uploader"
          acceptedFileTypes={["image/*"]}
          name="files" /* sets the file input name, it's filepond by default */
          labelIdle='Drag & Drop your images or <span class="filepond--label-action">Browse</span>'
          imagePreviewHeight={100}
          maxFiles={3}
          allowMultiple
          storeAsFile
        />
        <FormDescription>
          Can upload up to 3 images. The first image will be used as the primary image.
        </FormDescription>
      </FormItem>
    );
  },
);
