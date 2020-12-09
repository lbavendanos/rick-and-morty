<template>
  <section class="card text-gray-700">
    <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
      <img
        class="card-image lg:h-48 md:h-36 w-full object-cover object-center"
        :src="image"
        alt="blog"
      />
      <div class="p-6">
        <h2
          class="card-type tracking-widest text-xs title-font font-medium text-gray-500 mb-1"
        >
          {{ type }}
        </h2>
        <h1 class="card-name title-font text-lg font-medium text-gray-900 mb-3">
          {{ name }}
        </h1>
        <p class="card-description leading-relaxed mb-3">
          {{ description }}
        </p>
        <div v-if="to || href" class="card-actions flex items-center flex-wrap">
          <router-link
            v-if="to"
            :to="to"
            class="card-link text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
          >
            Learn More
          </router-link>
          <a
            v-if="href"
            :href="href"
            class="card-link text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Card',
  props: {
    type: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    href: {
      type: String,
      default: null
    },
    to: {
      type: [String, Object],
      default: null
    }
  }
})
</script>
