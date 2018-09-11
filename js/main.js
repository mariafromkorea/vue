var app = new Vue({
  el: '#app',
  data: {
    product: "Contacts",
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