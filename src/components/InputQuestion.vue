<script setup>
import DataService from '@/services/DataService';
import douglasImage from '@/assets/images/douglas.jpeg';
import TypingEffect from './TypingEffect.vue';
import { ref, onMounted } from 'vue';

const messages = ref([]);
const isLoading = ref(false);
const question = ref('');
const messagesContainer = ref(null);
const questionInput = ref(null);

const scrollToBottom = () => {
  messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
};

const fetchData = async (questionText) => {
  if (!questionText) return;

  messages.value.push({ text: questionText, type: 'question' });
  messages.value.push({ isLoading: true });
  isLoading.value = true;
  try {
    const data = await DataService.getAnswer(questionText);
    messages.value[messages.value.length - 1] = { text: data.answer, type: 'answer' };
  } catch (error) {
    messages.value[messages.value.length - 1] = { text: 'Error fetching data', type: 'answer' };
  } finally {
    isLoading.value = false;
    question.value = '';
    setFocus();
  }
};

const setFocus = () => {
  setTimeout(() => {
    questionInput.value.focus();
  }, 0);
};

onMounted(() => {
  setFocus();
  setTimeout(() => {
    fetchData('What is your first name?');
  }, 1000);
});
</script>

<template>
  <div class="chat-container">
    <div class="messages-container">
      <div class="list-container" ref="messagesContainer">
        <div class="width-objects">
          <v-list-item
            v-for="message in messages"
            :key="message.text"
            class="space-between-messages"
          >
            <v-row :class="message.type === 'question' ? 'justify-end' : 'justify-start'">
              <v-col cols="1" v-if="message.type === 'answer'">
                <v-avatar size="30">
                  <img :src="douglasImage" alt="Douglas" style="height: 30px;" />
                </v-avatar>
              </v-col>
              <v-col
                cols="9"
                :order="message.type === 'question' ? 1 : 2"
                :class="{ 'text-right': message.type === 'question' }"
              >
                <v-skeleton-loader
                  v-if="message.isLoading"
                  type="list-item-avatar-three-line"
                />
                <span v-else>
                  <p
                    class="text-justify"
                    :class="{ 'question-style': message.type === 'question' }"
                  >
                    <TypingEffect :text="message.text" :scrolled="scrollToBottom" />
                  </p>
                </span>
              </v-col>
  
            </v-row>
          </v-list-item>
        </div>
      </div>
    </div>
    <div class="input-container width-objects">
      <v-text-field
        v-model="question"
        ref="questionInput"
        @keyup.enter="fetchData(question)"
        label="Ask me anything"
        single-line
        hide-details
        variant="solo"
        :loading="isLoading"
        :disabled="isLoading"
        append-inner-icon="mdi-send"
        @click:append-inner="fetchData(question)"
      ></v-text-field>
    </div>
  </div>
</template>

<style scoped>
.space-between-messages {
  padding-bottom: 18px !important;
  padding-top: 18px !important;
}
.question-style {
  border-radius: 15px;
  padding: 5px 12px;
  background-color: #585858;
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
}

.list-container {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.width-objects {
  width: 100%;
  max-width: 48rem;
}

.messages-container {
  flex: 1 1 0%;
  overflow: hidden;
  width: 100%;
  display: flex;
}

.input-container {
  padding: 10px;
}
</style>