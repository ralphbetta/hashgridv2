'use client'
import { ArrowLeftRight, Copy } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function EditorSection() {

    const [code, setCode] = useState(`
<!DOCTYPE html>
<html>
<head>
<title>Simple Calculator</title>
<style>
body {
  font-family: sans-serif;
  background: black
}
.calculator {
  width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
.calculator input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.calculator button {
  width: 25%;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}
</style>
</head>
<body>
<div class="calculator">
  <input type="text" id="display" readonly>
  <button onclick="appendToDisplay('7')">7</button>
  <button onclick="appendToDisplay('8')">8</button>
  <button onclick="appendToDisplay('9')">9</button>
  <button onclick="appendToDisplay('/')">/</button>
  <button onclick="appendToDisplay('4')">4</button>
  <button onclick="appendToDisplay('5')">5</button>
  <button onclick="appendToDisplay('6')">6</button>
  <button onclick="appendToDisplay('*')">*</button>
  <button onclick="appendToDisplay('1')">1</button>
  <button onclick="appendToDisplay('2')">2</button>
  <button onclick="appendToDisplay('3')">3</button>
  <button onclick="appendToDisplay('-')">-</button>
  <button onclick="appendToDisplay('0')">0</button>
  <button onclick="appendToDisplay('.')">.</button>
  <button onclick="calculate()">=</button>
  <button onclick="appendToDisplay('+')">+</button>
  <button onclick="clearDisplay()">C</button>
</div>

<script>
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (error) {
    document.getElementById('display').value = "Error";
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}
</script>

</body>
</html>
          `);
    const [githubUrl, setGithubUrl] = useState("");
    const [deployedUrl, setDeployedUrl] = useState("");
    const [isDeploying, setIsDeploying] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState("blank");
    const [livePreview, setLivePreview] = useState(code);

    useEffect(() => {
        setLivePreview(code);
    }, [code]);

    return (
        <div className='mx-6 md:mx-0 mt-[10%]'>
            <p className='text-center text-3xl md:text-5xl font-semibold mt-[8%] mb-4'>Deploy Your Website on Smart Contracts </p>
            <p className="md:max-w-2xl mx-auto text-center md:text-xl mb-12 text-muted-foreground leading-[1.8]"> Actually, we&apos;re not so different from other coding platforms. But with AI, do you catch our drift? Exactly, that&apos;s the point.</p>

            <div className='border border-primary/30 rounded-2xl max-w-6xl mx-auto px-4 md:px-8'>
                <div className='flex'>
                    <p className='plain-card px-5 py-2 md:py-3 rounded-xl my-4'>Code Editor</p>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-x-4 '>
                    <div className='w-full  rounded-xl border border-primary h-[350px] md:h-[650px] overflow-y-hidden'>
                        <div className='py-4 px-8 plain-card rounded-t-xl flex justify-between'><p>Code Editor</p> <button><Copy /></button></div>
                        <textarea
                            id="code-editor"
                            placeholder="Enter your HTML/CSS/JavaScript code here"
                            value={code}
                            rows={25}
                            onChange={(e) => {
                                setCode(e.target.value);
                                setLivePreview(e.target.value);
                            }}
                            className="w-full focus:outline-none"
                        >{ }</textarea>
                    </div>
                    <div><ArrowLeftRight /></div>
                    <div className='w-full border border-primary rounded-xl bg-green-600 overflow-y-hidden h-[360px] md:h-[650px]'>
                        <div className='py-4 px-8 plain-card rounded-t-xl'> Live Preview</div>
                        <iframe
                            id="live-preview"
                            srcDoc={livePreview}
                            className="w-full h-full bg-red"
                            title="Live Preview"
                        />
                    </div>
                </div>
                <div className='flex'>
                    <button onClick={() => { }} className='plain-card px-3 md:px-5 md:py-3 py-2 rounded-xl my-4 bg-primary text-gray-700'>Deploy to HTTP3</button>
                </div>
            </div>
        </div>
    )
}

export default EditorSection