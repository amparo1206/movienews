import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Form.scss'


const Form = () => {
  let navigate = useNavigate()
  const [data, setData] = useState({
    title: "",
    section: "",
    abstract: "",
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sending data... " + data.title + " " + data.section + " " + data.abstract + "");
    setTimeout(() => {
      navigate("/");
    }, 1000);
    let title = data.title;
    let section = data.section;
    let abstract = data.abstract;
    const info = { title, section, abstract };
    localStorage.setItem("myForm", JSON.stringify(info))
  }
  return (
    <div className='box-form'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Send Your Post</h1>
        <label>Title</label>
        <input type="text" onChange={handleInputChange} name='title' id='title' placeholder='put the title' />
        <label>Section</label>
        <input type="text" onChange={handleInputChange} name='section' id='section' placeholder='indicates the section' />
        <label>Post</label>
        <input type="text" onChange={handleInputChange} name='abstract' id='abstract' placeholder='write your post here' />
        <button type='submit'>SEND</button>
      </form>
    </div>
  )

  }



export default Form