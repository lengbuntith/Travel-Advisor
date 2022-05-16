<template>
  <div class="pr-0 pr-md-5 pl-0 pl-md-5 pb-1 pb-md-5">
    <div v-for="faq in faqs" :key="faq._id">
      <center>
        <h3 id="a1" class="mb-1 mb-md-5 mt-2 mt-md-8" style="">
          {{ faq.header }}
        </h3>
      </center>
      <v-expansion-panels focusable elevation="1" flat hover>
        <v-expansion-panel
          v-for="item in faq.items"
          :key="item._id"
          class="pa-1"
        >
          <v-expansion-panel-header
            class="pt-4 pt-md-9"
            style="color: rgba(61, 133, 198); font-weight: 700"
            >{{ item.question }}</v-expansion-panel-header
          >
          <v-expansion-panel-content
            class="pb-1 pt-4"
            style="
              background-color: rgba(61, 133, 198, 0.025);
              font-weight: 600;
            "
          >
            {{ item.answer }}
          </v-expansion-panel-content>
          <hr />
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          _id: 1,
          header: 'Travel Advise and Advisories',
          items: [
            {
              _id: 1,
              question: 'What are Travel Advice and Advisories?',
              answer:
                'Travel Advice and Advisories give you official Government of Canada information and advice on situations that may affect your safety and well-being when you are travelling or living outside Canada. They may include an advisory for a country or region where security or health conditions have changed.',
            },
            {
              _id: 2,
              question: 'Who should read Travel Advice and Advisories?',
              answer:
                "Anyone planning to travel or live outside Canada should read the Travel Advice and Advisories for their destination(s). Anyone already outside Canada should keep up with updates made to their destination's Travel Advice and Advisories.",
            },
            {
              _id: 3,
              question:
                'How are Travel Advice and Advisories developed and maintained?',
              answer:
                'We analyze trends and incidents affecting international travellers, monitor world events and collect updated reports from different sources. We use this information to update the Travel Advice and Advisories on situations that may affect your safety and secuity when you are travelling or living outside Canada.',
            },
            {
              _id: 4,
              question:
                'How often are Travel Advice and Advisories pages updated?',
              answer:
                'The pages are updated regularly and revised as security or health conditions in a country or region change.',
            },
            {
              _id: 5,
              question: 'How do I determine if it is safe to travel?',
              answer:
                'The decision to travel is yours alone. The Travel Advice and Advisories provide recommendations about safety and security conditions in destinations around the world to help you to make informed decisions.',
            },
          ],
        },
        {
          _id: 2,
          header: 'Travel Advise and Advisories',
          items: [
            {
              _id: 1,
              question: 'What are Travel Advice and Advisories?',
              answer:
                'Travel Advice and Advisories give you official Government of Canada information and advice on situations that may affect your safety and well-being when you are travelling or living outside Canada. They may include an advisory for a country or region where security or health conditions have changed.',
            },
            {
              _id: 2,
              question: 'Who should read Travel Advice and Advisories?',
              answer:
                "Anyone planning to travel or live outside Canada should read the Travel Advice and Advisories for their destination(s). Anyone already outside Canada should keep up with updates made to their destination's Travel Advice and Advisories.",
            },
            {
              _id: 3,
              question:
                'How are Travel Advice and Advisories developed and maintained?',
              answer:
                'We analyze trends and incidents affecting international travellers, monitor world events and collect updated reports from different sources. We use this information to update the Travel Advice and Advisories on situations that may affect your safety and secuity when you are travelling or living outside Canada.',
            },
            {
              _id: 4,
              question:
                'How often are Travel Advice and Advisories pages updated?',
              answer:
                'The pages are updated regularly and revised as security or health conditions in a country or region change.',
            },
            {
              _id: 5,
              question: 'How do I determine if it is safe to travel?',
              answer:
                'The decision to travel is yours alone. The Travel Advice and Advisories provide recommendations about safety and security conditions in destinations around the world to help you to make informed decisions.',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
