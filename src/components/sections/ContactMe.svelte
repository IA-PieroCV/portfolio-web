<script>
  import * as yup from "yup";
  import { Form, Message } from "svelte-yup";

  let schema = yup.object().shape({
    name: yup.string().required().max(30).label("Name"),
    email: yup.string().required().email().label("Email address"),
    message: yup.string().required().min(6).label("Message"),
  });

  let fields = { email: "", name: "", message: "" };
  let submitted = false;
  let isValid;

  function formSubmit() {
    submitted = true;
    isValid = schema.isValidSync(fields);
    if (isValid) {
      alert("Everything is validated!");
      // Add your form submission logic here (e.g., sending data to a server)
    }
  }
</script>

<section id="contact" class="bg-gray-900 p-10">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-4xl font-bold text-white text-center mb-6">Contact Me</h2>
    <div class="bg-white shadow-lg rounded-lg px-8 py-10">
      <Form
        class="space-y-6"
        {schema}
        {fields}
        submitHandler={formSubmit}
        {submitted}
      >
        <!-- Name Field -->
        <div>
          <label class="block text-lg font-medium text-gray-700 mb-2" for="name"
            >Name:</label
          >
          <input
            type="text"
            bind:value={fields.name}
            class="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Name"
          />
          <Message name="name" />
        </div>

        <!-- Email Field -->
        <div>
          <label
            class="block text-lg font-medium text-gray-700 mb-2"
            for="email">Email:</label
          >
          <input
            type="email"
            bind:value={fields.email}
            class="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email address"
          />
          <Message name="email" />
        </div>

        <!-- Message Field -->
        <div>
          <label
            class="block text-lg font-medium text-gray-700 mb-2"
            for="message">Message:</label
          >
          <textarea
            bind:value={fields.message}
            class="custom-scrollbar shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            placeholder="Your message"
          />
          <Message name="message" />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="duration-200 w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send Message
        </button>
      </Form>
    </div>
  </div>
</section>

<style>
  /* Add any additional styling needed here */
  .form input,
  .form textarea {
    margin-bottom: 1rem;
    min-height: 46px;
    max-height: 150px;
  }

  .form .error {
    color: red;
    font-size: 0.875rem;
    margin-top: -0.5rem;
    margin-bottom: 1rem;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f3f3f3;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #a0aec0;
    border-radius: 4px;
    border: 2px solid #f3f3f3;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #718096;
  }

  section {
    scroll-margin-top: 64px;
  }

  textarea {
    min-height: 46px;
    max-height: 150px;
  }

  section {
    scroll-margin-top: 64px;
  }
</style>
