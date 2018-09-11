Vue.component('product', {
  template:`
  <div class="contacts">
<ul>
          <li v-for="contact in contacts" :key="contact.contactID">
            <h3>{{ contact.contactName }}</h3>
            <div> <b>{{ contact.contactCompany }}</b> | <i>{{ contact.contactTitle }}</i></div>

            <div>
              <button @click="updateDetails(
              contact.contactName,
              contact.contactEmail,
              contact.contactPhone,
              contact.contactCompany,
              contact.contactNotes,
              contact.contactTitle
              )">Details</button>
            </div>
          </li>
        </ul>
        <div v-if="showDetails" id="details">
          <button @click="hideDetails">X</button>
          <h2>{{ name }}</h2>
          <div class="company"><b>Company: </b>{{ company }}</div>
          <div class="title"><b>Title: </b>{{ title }}</div>
          <div class="details">{{ phone }} | {{ email }}</div>
          <div class="notes">{{ notes }}</div>
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
    addContact: function() {

    },
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
    }
  },
  computed: {

  }
})

var app = new Vue({
  el: '#app',
})