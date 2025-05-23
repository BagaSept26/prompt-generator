<template>
  <div id="app-container">
    <header>
      <h1>AI Prompt Generator</h1>
    </header>
    <main>
      <PromptForm @generate="handleGeneratorPrompt"/>
      <!--import GeneratedPrompt-->
      <GeneratedPromptDisplay :prompt="generatedPrompt"/>
    </main>
    <footer>
      <p>uji coba lab AI | <a href="https://github.com/BagaSept26" target="_blank">Source Code</a></p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PromptForm from './components/PromptForm.vue';
import GeneratedPromptDisplay from './components/GeneratedPromptDisplay.vue';

const generatedPrompt = ref('');

function handleGeneratorPrompt(formData) {
  let promptParts = [];
  if (formData.subject) promptParts.push(formData.subject);
  if (formData.style) promptParts.push(`in a ${formData.style} style`);
  if (formData.keywords) promptParts.push(formData.keywords);
  if (formData.is4K) promptParts.push("4K resolution");
  if (formData.isUltraDetailed) promptParts.push("ultra detailed");

  generatedPrompt.value = promptParts.join(', ');
}

//fungsi copyToClipboard dan copySuced bisa dihapus dari App.vue
//karena dihanlde oleh GenerraedPrompmtDisplay.vue
</script>

<style>
/* Global style untuk app.vue */
body {
  font-family: sans-serif;
  margin: 0;
  background-color: #e9e9e9;
  color: #333;

}
#app-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 8px;
}
header {
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
header h1 {
  color: #2c3e50;
}
footer {
  text-align: center;
  margin-top: 30px;
  padding-top: 15px;
  border-top: 1px solid #eee;
  font-size: 0.9em;
  color: #777;
}
footer a {
  color: #007bff;
  text-decoration: none;
}
footer a:hover {
  text-decoration: underline;
}
</style>