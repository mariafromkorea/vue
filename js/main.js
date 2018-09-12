Vue.component('product', {
  template:`
  <div class="contacts" v-bind:class="{ active: showDetails }">
      <ul class="contact-list">
          <li v-for="contact in contacts" :key="contact.contactID">
            <h3><a @click="updateDetails(
              contact.contactName,
              contact.contactEmail,
              contact.contactPhone,
              contact.contactCompany,
              contact.contactNotes,
              contact.contactTitle
              );">{{ contact.contactName }}</a></h3>
            <div class="teaser"> <b>{{ contact.contactCompany }}</b> | <i>{{ contact.contactTitle }}</i></div>
          </li>
        </ul>
        <div id="details">
          <div class="panel" v-if="showDetails">
            <button @click="hideDetails" class="close"></button>
            <h2>{{ name }}</h2>
            <div class="company"><b>Company: </b>{{ company }}</div>
            <div class="title"><b>Title: </b>{{ title }}</div>
            <div class="details">{{ phone }} | {{ email }}</div>
            <div class="notes">{{ notes }}</div>
          </div>
        </div>
  </div>
  `,
  data() {
    return{
      showDetails: false,
      name:null,
      email:null,
      phone:null,
      company:null,
      title: null,
      notes:null,
      contacts: [
        {
          contactID:01,
          contactName: "Chester Tester",
          contactEmail: "chestertester@gmail.com",
          contactPhone:"410-555-5555",
          contactCompany:"AppOmni",
          contactTitle:"Chief Security Officer",
          contactNotes:"Never picks up his phone but responds via email."
        },
        {
          contactID:02,
          contactName: "Lester Tester",
          contactEmail: "lestertester@gmail.com",
          contactPhone:"410-555-5551",
          contactCompany:"AppOmni",
          contactTitle:"Chief Technology Officer",
          contactNotes:"Can be bribed with Chocolate"
        }
      ]
    }
  },
  methods: {
    updateDetails: function(contactName, contactEmail, contactPhone, contactCompany, contactTitle, contactNotes) {
      this.showDetails = true
      this.email = contactEmail,
          this.phone = contactPhone,
          this.name = contactName,
          this.company = contactCompany,
          this.title = contactTitle,
          this.notes = contactNotes
    },
    hideDetails: function () {
      this.showDetails = false
    },
    onSubmit() {
      this.push(contacts)
    }
  },
  computed: {

  },
})

Vue.component('addcontact', {
  template: `
            <form id="addcontact" @submit.prevent="onSubmit">
          <input type="text" v-model="name"  placeholder="name">
          <input type="submit" value="submit">
        </form>
    `,
  data() {
    return{
      name:null
    }
  },
  methods: {
    onSubmit() {
      let newContact =  {
        name: this.name
      }
      this.$emit('contact-added', newContact)
      this.name = null
    }
  }
});

var app = new Vue({
  el: '#app',
})