<template>
  <div class="text-white">
    <h2>Dodaj nowy artykuł</h2>
    <input v-model="title" placeholder="Tytuł" class="border p-2 mb-4 w-full" />

    <div v-for="(block, index) in contentBlocks" :key="index" class="mb-4">
      <select v-model="block.type" class="border p-1 mb-2">
        <option value="text">Tekst</option>
        <option value="image">Obrazek</option>
      </select>
      <input
        v-if="block.type === 'text'"
        v-model="block.data"
        placeholder="Treść"
        class="border p-2 w-full"
      />
      <input
        v-else-if="block.type === 'image'"
        v-model="block.src"
        placeholder="URL obrazka"
        class="border p-2 w-full"
      />
      <input
        v-if="block.type === 'image'"
        v-model="block.alt"
        placeholder="Alt tekst"
        class="border p-2 w-full mt-1"
      />
      <button @click="removeBlock(index)" class="text-red-500 mt-1">
        Usuń blok
      </button>
    </div>

    <button @click="addBlock" class="bg-blue-500 text-white px-4 py-2 rounded">
      Dodaj blok
    </button>
    <button
      @click="submitArticle"
      class="bg-green-500 text-white px-4 py-2 rounded ml-2"
    >
      Zapisz artykuł
    </button>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const title = ref("");
const contentBlocks = reactive([{ type: "text", data: "" }]);

const addBlock = () => contentBlocks.push({ type: "text", data: "" });
const removeBlock = (index) => contentBlocks.splice(index, 1);

const slug = computed(() =>
  title.value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
);

const submitArticle = async () => {
  const { data, error } = await supabase
    .from("articles")
    .insert([
      {
        title: title.value,
        slug: slug.value,
        content: JSON.parse(JSON.stringify(contentBlocks)),
        author_id: "4327cf27-31d4-4975-a8ea-950cd3ed3918",
        published: true,
      },
    ])
    .select();

  if (error) console.error(error);
  else alert("Artykuł dodany!");
};
</script>
