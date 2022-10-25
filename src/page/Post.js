import React, {useEffect, useState} from "react";
import {Button, Form, Input} from "antd";
import memeServices from "../services/memeServices";
import {useNavigate} from "react-router-dom";
import {Select, Upload, message, Image} from "antd";

import {AiOutlineCloudUpload} from "react-icons/ai";
import {useQuery} from "react-query";

import {getBase64, uploadImage} from "../util/index";
import {toast} from "react-hot-toast";
import {upload} from "@testing-library/user-event/dist/upload";

// import Fire from "../services/fire";

// import {toast} from 'react-hot-toast';
// import {uploadFile} from "../upload/upload.ts";

const {Option} = Select;

// https://github.com/lilhuy0405/meme-portal-frontend/blob/master/src/pages/CreatePost/CreatePost.js
function Post() {
  const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/gif", "image/webp"];
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  // console.log(url);
  const {data = {}} = useQuery(["memeServices.getCategories"], () =>
    memeServices.getCategories()
  );
  const {data: categories = {}} = data;



  const onFinish = async (values) => {
    if (!file) {
      toast.error('Please upload image!');
      return;
    }
    const createPostPromise = new Promise(async (resolve, reject) => {
      try {
        setLoading(true);
        //avoid same filename and firestore will replace the old one -> rename file before upload

        const urlImg = await uploadImage(file);
        await memeServices.createPost({...values, image: urlImg});

        message.success("successful post");
        setFile(null);
        setImage("");
        navigate("/");
        resolve();

      } catch (err) {
        console.error(err);
        reject(err);
      } finally {
        setLoading(false);
      }
    });

    await toast.promise(createPostPromise, {
      loading: "Saving post...",
      success: () => `Saved success !!`,
      error: (err) => `Create post failed: ${err.message} !`,
    });
  };

  const handleChooseFile = ({file}) => {
    if (ALLOWED_TYPES.includes(file.type)) {
      setFile(file);
      getBase64(file, setImage);
    } else {
      toast.error("File Type is not allowed");
    }
  };

  const onFinishFailed = () => {
    toast.error("Check form value");
  };

  // console.log("cuongthom",url);
  return (
    <div>
      <h1 className="text-3xl text-center py-5">List Post</h1>
      <Form
        name="nest-messages"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="title" label="title">
          <Input/>
        </Form.Item>
        <Form.Item name="description " label="description ">
          <Input/>
        </Form.Item>
        <Form.Item name="image" label="image">
          {/*cho thang Upload.Dragger vao day*/}
          <Upload.Dragger
            accept={ALLOWED_TYPES.join(", ")}
            showUploadList={false}
            customRequest={handleChooseFile}
            className="mb-24"
            height={160}
          >
            {image ? (
              <Image src={image} height={120} preview={false}/>
            ) : (
              <div className="flex-row justify-content-center">
                <p size="body-m">PNG, JPG, WEBP or GIF. Max 10mb.</p>
                <Button
                  icon={
                    <AiOutlineCloudUpload style={{marginRight: "10px"}}/>
                  }
                >
                  Choose File
                </Button>
              </div>
            )}
          </Upload.Dragger>
        </Form.Item>
        <Form.Item
          name="categoryId"
          rules={[{required: true, message: "Category is required"}]}
        >
          <Select placeholder="Categories">
            {categories.length &&
              categories.map((item) => (
                <Option value={item.id} key={item.id}>
                  {item.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            disabled={loading}
            type="primary"
            htmlType="submit"
            style={{color: "black"}}
          >
            {loading ? "loadding..." : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Post;
