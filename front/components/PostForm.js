import React, { useCallback, useState, useEffect } from 'react';
import { Form, Button, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);

  useEffect(() => {
    setText('');
  }, [postAdded === true])

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        text,
      }
    })
  }, []);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <Form encType="multipart/form-data" style={{ margin: '10px 0 20px' }} onSubmit={onSubmitForm}>
        <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" onChange={onChangeText} value={text} />
        <div>
          <input type="file" multiple hidden />
          <Button key={'upload'}>이미지 업로드</Button>
          <Button key={'submit'} type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>짹짹</Button>
        </div>
        <div>
          {
            imagePaths.map((v, i) => (
              <div key={v} style={{ display: 'inline-block' }}>
                <img src={`http://localhost:3065/${v}`} style={{ width: '200px' }} alt={v} />
                <div>
                  <Button>제거</Button>
                </div>
              </div>
            ))
          }
        </div>
      </Form>
    </>
  );
};

export default PostForm;