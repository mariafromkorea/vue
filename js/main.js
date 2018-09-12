Vue.component('product', {
  template:`
<span v-bind:class="{ active: addContact}">
  <div class="title-bar" :class="{ addcontact: addContact}">
        <h1>
        <span>Contacts</span> 
        <button v-if="!addContact"@click="newContact"><i></i><span>New Contact</span></button>
        <button v-if="addContact"@click="cancelNewContact"><i></i><span>Cancel</span></button>
        </h1>
    </div>
  <div class="contacts" v-bind:class="{ active: showDetails }">
      <ul class="contact-list">
          <li v-for="contact in contacts" :key="contact.contactID">
            <h3><a @click="updateDetails(
              contact.contactName, 
              contact.contactTitle, 
              contact.contactCompany, 
              contact.contactPhone, 
              contact.contactEmail, 
              contact.contactNotes
              );">{{ contact.contactName }}</a></h3>
            <div class="teaser"> <b>{{ contact.contactCompany }}</b> | <i>{{ contact.contactTitle }}</i></div>
            <div class="actions">
              <button @click="deleteItem" class="delete">
                <i>
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 87 93.5" style="enable-background:new 0 0 87 93.5;" xml:space="preserve">
                  <g>
                    <path class="st0" d="M84.6,12.7H58.2V8.2c0-4.5-3.6-8.2-8.2-8.2H35.6c-4.5,0-8.2,3.6-8.2,8.2v4.5H2.3C1,12.7,0,13.7,0,15
                      s1,2.3,2.3,2.3h5.8l5.1,67.6c0.3,4.8,4.4,8.6,9.3,8.6h40.7c4.9,0,9-3.7,9.3-8.6l5.1-67.6h7c1.3,0,2.3-1,2.3-2.3
                      S85.9,12.7,84.6,12.7z M32.2,8.2c0-2,1.5-3.5,3.5-3.5h14.6c2,0,3.5,1.5,3.5,3.5v4.5H32.2V8.2z M67.8,84.5c-0.2,2.4-2.2,4.3-4.7,4.3
                      H22.6c-2.4,0-4.4-1.9-4.7-4.3l-5.1-67.2h14.7h4.7h21.6h4.7H73L67.8,84.5z"/>
                    <path class="st0" d="M42.9,29.4c-1.3,0-2.3,1-2.3,2.3v43c0,1.3,1,2.3,2.3,2.3c1.3,0,2.3-1,2.3-2.3v-43
                      C45.2,30.4,44.2,29.4,42.9,29.4z"/>
                    <path class="st0" d="M55.7,31.6l-2.3,43c-0.1,1.3,0.9,2.3,2.2,2.4h0.1c1.3,0,2.2-0.9,2.3-2.2l2.3-43c0.1-1.3-0.9-2.3-2.2-2.4
                      C56.8,29.4,55.8,30.3,55.7,31.6z"/>
                    <path class="st0" d="M27.6,29.4c-1.3,0.1-2.2,1.2-2.2,2.4l2.3,43c0.1,1.3,1,2.2,2.3,2.2h0.1c1.3-0.1,2.2-1.2,2.2-2.4l-2.3-43
                      C29.9,30.3,28.9,29.4,27.6,29.4z"/>
                  </g>
                  </svg>
                </i>
              </button>
              <button @click="editItem" class="edit">
                <i>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 90.7 90.6" style="enable-background:new 0 0 90.7 90.6;" xml:space="preserve">
                <path class="st0" d="M85.9,5.1c-3.3-3.4-8-5.3-12.7-5.1c-4.8,0.1-9.3,2.1-12.7,5.5L3.6,62L0,88l0,0.5c0.1,1.1,1.1,2,2.3,2l0.3,0
                  l14.4-2c1.2-0.1,2.1-1.2,2-2.6c-0.1-0.6-0.3-1.1-0.8-1.4c-0.5-0.4-1.2-0.6-1.8-0.5L5,85.7L7.5,68L26,86.5c0.9,0.9,2.4,0.9,3.3,0
                  l55.6-55.4c3.7-3.6,5.8-8.7,5.8-13.8C90.7,12.6,89,8.2,85.9,5.1z M80.6,28.9L27.6,81.7L20,74l52.9-52.7L80.6,28.9z M69.7,18
                  L16.7,70.8l-7.6-7.6L62,10.4L69.7,18z M82.6,8.4c4.2,4.3,4.6,11.6,1,17.1L65.4,7.3c2.3-1.7,5.1-2.6,7.8-2.7
                  C76.8,4.5,80.2,5.9,82.6,8.4z"/>
                </svg>
                </i>
              </button>
            </div>
          </li>
        </ul>
        <div id="details">
          <div class="panel add-contact" v-if="addContact">
            <new-contact-form></new-contact-form>
          </div>
          <div class="panel details" v-if="showDetails">
            <div class="actions">
              <button @click="deleteItem" class="delete">
                <i>
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 87 93.5" style="enable-background:new 0 0 87 93.5;" xml:space="preserve">
                  <g>
                    <path class="st0" d="M84.6,12.7H58.2V8.2c0-4.5-3.6-8.2-8.2-8.2H35.6c-4.5,0-8.2,3.6-8.2,8.2v4.5H2.3C1,12.7,0,13.7,0,15
                      s1,2.3,2.3,2.3h5.8l5.1,67.6c0.3,4.8,4.4,8.6,9.3,8.6h40.7c4.9,0,9-3.7,9.3-8.6l5.1-67.6h7c1.3,0,2.3-1,2.3-2.3
                      S85.9,12.7,84.6,12.7z M32.2,8.2c0-2,1.5-3.5,3.5-3.5h14.6c2,0,3.5,1.5,3.5,3.5v4.5H32.2V8.2z M67.8,84.5c-0.2,2.4-2.2,4.3-4.7,4.3
                      H22.6c-2.4,0-4.4-1.9-4.7-4.3l-5.1-67.2h14.7h4.7h21.6h4.7H73L67.8,84.5z"/>
                    <path class="st0" d="M42.9,29.4c-1.3,0-2.3,1-2.3,2.3v43c0,1.3,1,2.3,2.3,2.3c1.3,0,2.3-1,2.3-2.3v-43
                      C45.2,30.4,44.2,29.4,42.9,29.4z"/>
                    <path class="st0" d="M55.7,31.6l-2.3,43c-0.1,1.3,0.9,2.3,2.2,2.4h0.1c1.3,0,2.2-0.9,2.3-2.2l2.3-43c0.1-1.3-0.9-2.3-2.2-2.4
                      C56.8,29.4,55.8,30.3,55.7,31.6z"/>
                    <path class="st0" d="M27.6,29.4c-1.3,0.1-2.2,1.2-2.2,2.4l2.3,43c0.1,1.3,1,2.2,2.3,2.2h0.1c1.3-0.1,2.2-1.2,2.2-2.4l-2.3-43
                      C29.9,30.3,28.9,29.4,27.6,29.4z"/>
                  </g>
                  </svg>
                </i>
              </button>
              <button @click="editItem" class="edit">
                <i>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 90.7 90.6" style="enable-background:new 0 0 90.7 90.6;" xml:space="preserve">
                <path class="st0" d="M85.9,5.1c-3.3-3.4-8-5.3-12.7-5.1c-4.8,0.1-9.3,2.1-12.7,5.5L3.6,62L0,88l0,0.5c0.1,1.1,1.1,2,2.3,2l0.3,0
                  l14.4-2c1.2-0.1,2.1-1.2,2-2.6c-0.1-0.6-0.3-1.1-0.8-1.4c-0.5-0.4-1.2-0.6-1.8-0.5L5,85.7L7.5,68L26,86.5c0.9,0.9,2.4,0.9,3.3,0
                  l55.6-55.4c3.7-3.6,5.8-8.7,5.8-13.8C90.7,12.6,89,8.2,85.9,5.1z M80.6,28.9L27.6,81.7L20,74l52.9-52.7L80.6,28.9z M69.7,18
                  L16.7,70.8l-7.6-7.6L62,10.4L69.7,18z M82.6,8.4c4.2,4.3,4.6,11.6,1,17.1L65.4,7.3c2.3-1.7,5.1-2.6,7.8-2.7
                  C76.8,4.5,80.2,5.9,82.6,8.4z"/>
                </svg>
                </i>
              </button>
            </div>
            <button @click="hideDetails" class="close"></button>
            <h2>{{ name }}</h2>
            <div class="summary"><i>{{ title }}</i> at <b>{{ company }}</b></div>
            <div class="phone"><i></i>{{ phone }}</div>
            <div class="email"><i></i>{{ email }}</div>
            <div class="notes"><h6>Notes:</h6>{{ notes }}</div>
          </div>
        </div>
  </div>
  </span>
  `,
  data() {
    return{
      addContact:false,
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
          contactPhone:"410-111-1111",
          contactCompany:"AppOmni",
          contactTitle:"Chief Security Officer",
          contactNotes:"Never picks up his phone but responds via email. Last contacted 8/1/2018, follow up scheduled for 9/1 upon budget approval."
        },
        {
          contactID:02,
          contactName: "Lester Tester",
          contactEmail: "lestertester@gmail.com",
          contactPhone:"410-222-2222",
          contactCompany:"Salesforce",
          contactTitle:"Director of Sales",
          contactNotes:"Best to get Lester first thing on Monday before the week makes him cranky. Do not call after Wednesday."
        },
        {
          contactID:03,
          contactName: "Hester Tester",
          contactEmail: "lestertester@gmail.com",
          contactPhone:"410-333-3333",
          contactCompany:"Jira",
          contactTitle:"Creative Director",
          contactNotes:"Very enthusiatic lead but not the primary stakeholder and has virtually no say in decision making."
        },
        {
          contactID:04,
          contactName: "Nester Tester",
          contactEmail: "lestertester@gmail.com",
          contactPhone:"410-444-4444",
          contactCompany:"Netsuite",
          contactTitle:"Chief Technology Officer",
          contactNotes:"Hester's twin brother. He's only the contact list in case we can't get in touch with Hester."
        },
        {
          contactID:05,
          contactName: "MariafromKorea",
          contactEmail: "mariafromkorea18@gmail.com",
          contactPhone:"443-682-2114",
          contactCompany:"AppOmni",
          contactTitle:"User Experience Design",
          contactNotes:"Absolutely brilliant and can be bribed with chocolate and kittens."
        }
      ]
    }
  },
  methods: {
    updateDetails(contactName, contactTitle, contactCompany, contactPhone, contactEmail, contactNotes) {
      this.showDetails = true,
      this.name = contactName,
      this.title = contactTitle,
      this.company = contactCompany,
      this.phone = contactPhone,
      this.email = contactEmail,
      this.notes = contactNotes
    },
    hideDetails: function () {
      this.showDetails = false
    },
    onSubmit() {
      this.push(contacts)
    },
    editItem() {

    },
    deleteItem() {

    },
    newContact(addContact) {
      this.addContact = true
    },
    cancelNewContact(addContact) {
      this.addContact = false
    }
  },
  computed: {

  },
})

Vue.component('new-contact-form', {
  template: `
<span>
  <h4>Create New Contact</h4>
    <form id="new-contact">
      <input type="text"  placeholder="Name" required />
      <input type="text"  placeholder="Company" required />
      <input type="text"  placeholder="Title" required />
      <input type="text"  placeholder="Phone Number" required />
      <input type="email"  placeholder="Email Address" required />
      <textarea rows="4" cols="50" placeholder="Notes" name="notes"></textarea>
      <input type="submit" value="Create!" @click="alertForm"/>
    </form>
    </span>
    `,
  data() {
    return{
      name:null
    }
  },
  methods: {
    alertForm: function() {
      alert("test!");
    }
  }
});

var app = new Vue({
  el: '#app',
})