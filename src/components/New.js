import React from 'react'
import styled from 'styled-components'
import {Controlled as CodeMirror} from 'react-codemirror2'
import { apiPost } from '../api/api'
require('codemirror/mode/javascript/javascript')
require('codemirror/mode/htmlmixed/htmlmixed')


const NewSite = () => {
  const defaultValue = `<html>
  <title>My Tiny Site</title>
  <style>
    h1{color:tomato;}
  </style>
  <body>
    <h1 class='heading'>My Tiny Site!</h1>
    <p>You can create your own tiny site here</p>
    <p>add some more stuff here</p>
  </body>
  <script>
    const heading = document.querySelector('.heading')
    heading.addEventListener('click', ()=>{
      heading.style.color="steelblue";
    })
  </script>
</html>
    `
  const [htmlValue, setHtmlValue] = React.useState(defaultValue)

  function changeHandler(editor, data, value) {
  }

  const validateHtml = () => {
  
  }
  
  const handleSubmit = async () => {
    validateHtml()
    const response = await apiPost('/new', htmlValue)
    console.log(response)
  
  }
  return (
    <>
      <h2>
        New Tiny Site
      </h2>
      <CodeMirror
        autoCursor={true}
        value={htmlValue}
        options={{
          mode: 'htmlmixed',
          theme: 'material',
          lineNumbers: true
        }}
        onChange={changeHandler}
        onBeforeChange={(editor, data, value) => {
          setHtmlValue(value);
        }}
      />
      <Preview htmlValue={htmlValue}></Preview>
      <SubmitButton onClick={handleSubmit} >Publish</SubmitButton>
    </>
  )
}

const Preview = ({htmlValue}) => {
  return (
    <PreviewIframe srcDoc={htmlValue}>
      htmlValue
    </PreviewIframe>
  )
}
const SubmitButton = styled.button`
  padding:.5rem 2rem .5rem 2rem;
  border: 1px solid #242124;
  border-radius: 5px;
  background: ghostwhite;
  cursor: pointer;
  display:block;
  margin-top: 1rem;
  :hover{
    background:#242124;
    color:ghostwhite;
  }
`

const PreviewIframe = styled.iframe`
  width:100%;
  border:none;
  outline:none;
`

export default NewSite