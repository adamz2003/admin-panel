import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement, useEffect, useState } from "react";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
  Button,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import ApiService from "@/services/ApiService";
import notify from "@/utils/toast";

const PostBlogComponent: NextPageWithLayout = () => {
  const previewImg = useRef<any>(null);
  const titleRef = useRef<any>(null);
  const editorRef = useRef<any>(null);
  const [PreviewImgSize, setPreviewImgSize] = useState(true);
  const [Categories, setCategories] = useState<any>([]);
  const [SelCategory, setSelCategory] = useState<any>();
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const getBlogCategory = async () => {
    const res = await ApiService.getData({url: '/blogcategory/fetch'})
    setCategories(res)
  }

  useEffect(() => {
    getBlogCategory()
  }, []);

  const handleUploadImage = async (e: any) => {
    const file = e.target.files[0];
    const objectUrl = URL.createObjectURL(file);

    const image = new Image();
    image.src = objectUrl;

    await new Promise((resolve) => {
      image.onload = resolve;
    });

    if(image.width < 500 || image.height < 300){
      setPreviewImgSize(false);
      notify.error('the dimension of preview image is small. set over 500x300.')
    }
  };

  const saveBlogPage = async () => {
    console.log(previewImg.current.files[0]);
    if (
      !titleRef.current.value ||
      !SelCategory ||
      !editorRef.current.getContent() ||
      !previewImg.current.files[0] ||
      !PreviewImgSize
    ) {
      notify.error("Please check your data!");
      return;
    }
    const blogData = {
      title: titleRef.current.value,
      blogtag: 1,
      description: editorRef.current.getContent(),
      blogcategory: Number(SelCategory),
      files: previewImg.current.files[0],
    };

    try {
      const res = await ApiService.postData({
        url: "/blogs/create",
        data: blogData,
      });
      notify.success("Successful create a blog!");
    } catch (error) {}
  };

  return (
    <div className="grid gap-8">
      <div className="h-[300px] w-[500px] bg-cyan-500"></div>
      <div className="flex justify-end">
        <Button onClick={saveBlogPage}>Post</Button>
      </div>
      <Input
        variant="static"
        label="Title"
        inputRef={titleRef}
      ></Input>
      <div className="grid lg:grid-cols-2 gap-8">
        <Input
          variant="static"
          type="file"
          label="Preview Image"
          inputRef={previewImg}
          onChange={handleUploadImage}
        ></Input>
        <Select
          variant="static"
          label="Category"
          onChange={(e: any) => setSelCategory(e)}
        >
          {
            Categories.map((ele:any, idx:number) => (
              <Option value={ele.id} key={idx}>{ele.name}</Option>
            ))
          }
        </Select>
      </div>
      <div>
        <Editor
          apiKey="35a34n7jou0jbf0zwz8h70zqqavvt8qcz7f28uyupdsywlnj"
          onInit={(evt: any, editor: any) => (editorRef.current = editor)}
          init={{
            height: "500px",
            plugins:
              "pagebreak code advlist anchor autolink autosave charmap colorpicker contextmenu directionality emoticons fullpage fullscreen hr image importcss insertdatetime layer legacyoutput link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount",
            toolbar:
              "undo redo | blocks | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview",
            image_title: true,
            automatic_uploads: true,
            file_picker_types: "image",
            file_picker_callback: (cb, value, meta) => {
              console.log(editorRef);
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
    </div>
  );
};

PostBlogComponent.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default PostBlogComponent;
