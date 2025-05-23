<template>
    <div class="prompt-form">
        <h2>Buat Prompt Anda </h2>

        <!--Subject-->
        <div>
            <label for="subject">Subjec Utama:</label>
            <input type="text" id="subject" v-model="formData.subject" placeholder="e.g., a majestic dragon"/>
        </div>

        <!--Style-->
        <div>
            <label for="style">Gaya Artistik:</label>
            <select id="style" v-mode="formData.style">
                <option value="photorealistic">Photorealistic</option>
                <option value="impressionistic">Impresionistic</option>
                <option value="pixelart">Pixel Art</option>
                <option value="fantasy art">Fantasy Art</option>
                <!--Tambahkan lebih banyak gaya-->
            </select>
        </div>

        <!--Kata Kunci Tambahan-->
        <div>
            <label for="keywords">Kata Kunci Tambahan:</label>
            <input type="text" id="keywords" v-model="formData.keywords" placeholder="e.g., intricate details, cinematic lighting" />
        </div>

        <!--Modifier (checkbox)-->
        <div>
            <label>
                <input type="checkbox" v-model="formData.is4K"/>
                4K Resolution
            </label>
            <label>
                <input type="checkbox" v-model="formData.isUltraDetailed"/>
                Ultra Detailed
            </label>
        </div>

        <button @click="handleSubmit">Generate Prompt</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// menampung nilai dari form
const formData = ref({
    subject: '',
    style: '',
    keywords: '',
    is4K: false,
    isUltraDetailed: false,
});

const emit = defineEmits(['generate']);

function handleSubmit(){
    //emit event dgn membawa data dr form
    emit('generate', {...formData.value}); //kirim salinan objek
}
</script>

<style scoped>
.prompt-form{
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
}
.prompt-form div {
    margin-bottom: 15px;
}
.prompt-form label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}
.prompt-form input[type="text"],
.prompt-form select {
    width: 100%;
    padding: 8px;
    border: 1px solid#ccc;
    border-radius: 4px;
    box-sizing: border-box; /*agar padding tidak menambah lebar total */
}
.prompt-form button {
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.prompt-form button:hover {
    background-color: #45a049;
}
</style>