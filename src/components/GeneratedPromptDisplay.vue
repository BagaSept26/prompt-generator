<template>
    <div v-if="prompt" class="generated-prompt-container">
        <h3>Prompt Anda:</h3>
        <div class="prompt-output">
            <textarea readonly :value="prompt" ref="promptTextArea"></textarea>
        </div>
        <button @click="coppyToClipboard" class="copy-button">
            <span v-if="!copied">Salin ke Clipboard</span>
            <span v-else>Berhasil Disalin!</span>
        </button>
        <p v-if="copyError" class="copy-error-message">Gagal menyalin. Coba lagi.</p>
    </div>
    <div v-else class="no-prompt-message">
        <p>Prompt akan muncul di sini setelah anda click "Generate Prompt".</p>
    </div>
</template>

<script setup>
import { ref, toRefs, watch } from 'vue';

//mendefinisikan props yang diterima dari parent component (App.vue)
const props = defineProps({
    prompt:{
        type: String,
        required: true,
        default: '' //Default Value jika prompt kosong
    }
});

//membuat 'prompt' dari props menjadi reaktif untuk digunakan didalm template
const { prompt } = toRefs(props);

const copied = ref(false);
const copyError = ref(false);
const promptTextArea = ref(null); //ref utk mengakses elemen textarea

async function coppyToClipboard() {
    if (!prompt.value) return;

    try {
        //modern gunakan Clipboard API
        // await navigator.clipboard.writeText(prompt.value);

        //fallback jika Clipboard API tidak tersedia utk jangkauan luas
        //memastikan textarea ada dan memiliki nilai
        if (promptTextArea.value) {
            promptTextArea.value.select();//pilih teks di textarea
            promptTextArea.value.setSelectionRange(0, 99999); //utk mobile
            document.exeCommand('copy'); //Perintah copy (mungkin deprecated, tapi masih banyak digunakan)

            copied.value=true;
            copyError.value=false;

            //reset status "copied" setelah beberapa detik
            setTimeout(() => {
                copied.value = false;
            }, 2500);
        }
        else {
            throw new Error("Textarea tidak ditemukan");
        }
    } catch (err) {
        console.error('Gagal menyalin teks: ', err);
        copyError.value = true;
        copied.value = false;
        //reset status error
        setTimeout(() => {
            copyError.value = false;
        }, 3000);
    }
}

// jika prompt berubah (misalnya, prompt baru digenerate), reset status 'copied'
watch(prompt, () => {
    copied.value = false;
    copyError.value = false;
});
</script>

<style scoped>
.generated-prompt-container {
    margin-top: 25px;
    padding: 20px;
    background-color: #f0f8ff;
    border: 1px solid #cce7ff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);

}

.generated-prompt-container h3 {
    margin-top: 0;
    color: #333;
    font-size: 1.1em;
}

.prompt-output textarea {
    width: 100%;
    min-height: 100px;
    padding: 10px;
    border: 1px solid #b0d8ff;
    border-radius: 4px;
    box-sizing: border-box; 
    font-family: 'Courier New', Courier, monospace; /*font utk code prompt */
    font-size: 0.95em;
    line-height: 1.5;
    background-color: #ffffff;
    resize: vertical;
    margin-bottom: 12px;
}

.copy-button {
    padding: 10px 18px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9em;
    transition: background-color 0.2s ease-in-out;
}

.copy-button:hover {
    background-color: #0056b3;
}

.copy-button:active {
    background-color: #004085;

}

.copy-error-message {
    color: red;
    font-size: 0.85em;
    margin-top: 8px;
}

.no-prompt-message {
    margin-top: 25px;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px dashed #ddd;
    border-radius: 8px;
    text-align: center;
    color: #777;
}
</style>