import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@material-tailwind/react";

const BlogsList: NextPageWithLayout = () => {
  const editorRef = useRef<any>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className="grid gap-8">
    <div className="flex justify-end">
        <Button>
            Save
        </Button>
    </div>
      <Editor
        apiKey="35a34n7jou0jbf0zwz8h70zqqavvt8qcz7f28uyupdsywlnj"
        onInit={(evt: any, editor: any) => (editorRef.current = editor)}
        init={{
          height: "500px",
          plugins:
            "pagebreak code advlist anchor autolink autosave charmap colorpicker contextmenu directionality emoticons fullpage fullscreen hr image importcss insertdatetime layer legacyoutput link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount",
          toolbar:
            "undo redo | blocks | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image | preview",
          image_title: true,
          automatic_uploads: true,
          file_picker_types: "image",
          file_picker_callback: (cb, value, meta) => {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");

            input.addEventListener("change", (e: any) => {
              const file = e.target.files[0];

              const reader: any = new FileReader();
              reader.addEventListener("load", () => {
                /*
                  Note: Now we need to register the blob in TinyMCEs image blob
                  registry. In the next release this part hopefully won't be
                  necessary, as we are looking to handle it internally.
                */
                const id = "blobid" + new Date().getTime();
                const blobCache = editorRef.current.editorUpload.blobCache;
                const base64 = reader.result.split(",")[1];
                const blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);
                /* call the callback and populate the Title field with the file name */
                cb(blobInfo.blobUri(), { title: file.name });
              });
              reader.readAsDataURL(file);
            });

            input.click();
          },
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          image_class_list: [
            {
              title: "Rounded",
              value: "img-rounded",
            },
            {
              title: "Circle",
              value: "img-circle",
            },
            {
              title: "Thumbnail",
              value: "img-thumbnail",
            },
            {
              title: "Responsive",
              value: "img-responsive",
            },
            {
              title: "Fluid",
              value: "img-fluid",
            },
          ],
          image_caption: true,
        }}
      />
    </div>
  );
};

BlogsList.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default BlogsList;
