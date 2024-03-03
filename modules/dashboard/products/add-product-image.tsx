import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { FormDescription, FormItem, FormLabel } from "@/ui/form";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export function AddProductImage({
  files,
  setFiles,
}: {
  files: File[];
  setFiles: (files: File[]) => void;
}) {
  return (
    <FormItem>
      <FormLabel>Images</FormLabel>
      <FilePond
        files={files}
        onupdatefiles={(files) => setFiles(files.map((file) => file.file as File))}
        className="product-image-uploader"
        acceptedFileTypes={["image/*"]}
        name="files" /* sets the file input name, it's filepond by default */
        labelIdle='Drag & Drop your image or <span class="filepond--label-action">Browse</span>'
        imagePreviewHeight={100}
        maxFiles={1}
        allowMultiple
        storeAsFile
      />
      <FormDescription>
        {/* Can upload up to 3 images. The first image will be used as the primary image. */}
        Choose a clear image that shows the product in the best light.
      </FormDescription>
    </FormItem>
  );
}
