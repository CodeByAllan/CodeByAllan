<template>
  <UContainer>
    <UForm :schema="schema" :state="state" @submit="onFormSubmit" class="flex flex-col gap-4 pb-5">
      <UFormField label="Name" name="name" required>
        <UInput class="w-full" size="xl" type="text" v-model="state.name" :disabled="loading" />
      </UFormField>
      <UFormField label="Email" name="email" required>
        <UInput class="w-full" size="xl" type="email" v-model="state.email" :disabled="loading" />
      </UFormField>
      <UFormField label="Phone" name="phone" required>
        <UInput class="w-full" size="xl" type="tel" v-model="state.phone" :disabled="loading" />
      </UFormField>
      <UFormField label="Message" name="message" required>
        <UTextarea class="w-full" size="xl" autoresize v-model="state.message" :disabled="loading" />
      </UFormField>
      <UButton class="font-bold w-min flex justify-center" type="submit" label="Send" :loading="loading"
        :disabled="loading" :leading-icon="!loading ? 'i-lucide:mail' : ''" />
    </UForm>
  </UContainer>
</template>
<script setup lang="ts">
import { z } from "zod";
import emailjs from "@emailjs/browser";
const config = useRuntimeConfig().public;
const toast = useToast();
const schema = z.object({
  name: z.string().min(3, "The name must be at least 3 characters long."),
  email: z.email("Please enter a valid email address."),
  phone: z.string()
    .transform(val => val.replace(/\D/g, ''))
    .refine(val => val.length >= 12 && val.length <= 15, {
      message: "The phone number must be between 12 and 15 digits long (including the country code)."
    }),
  message: z
    .string()
    .min(10, "The message must be at least 10 characters long."),
});
const state = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});
const loading = ref(false);
async function onFormSubmit() {
  loading.value = true;
  const templateParams = {
    name: state.name,
    email: state.email,
    phone: state.phone,
    message: state.message,
  };
  try {
    await emailjs.send(
      config.emailjsServiceId,
      config.emailjsTemplateId,
      templateParams,
      config.emailjsPublicKey
    );
    toast.add({
      title: "Message sent!",
      description: "We will contact you shortly.",
      icon: "i-lucide-circle-check",
      color: "success",
    });
    Object.assign(state, {
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  } catch {
    toast.add({
      title: "Error sending",
      description: "There was a problem sending your message. Please try again.",
      icon: "i-lucide-circle-x",
      color: "error",
    });
  } finally {
    loading.value = false;
  }
}
</script>
