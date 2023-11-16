pkp.registry.registerComponent('preprint-to-journal', {
	name: 'PreprintToJournal',
    props: {
        formJournalPublication: Object
    },
    template: `
    <div>
        <pkp-form
            @set="set" 
            @success="onSuccess"
            v-if="showFormJournalPublication"
            v-bind="formJournalPublication"    

        />
        <div v-else>
            {{textToShow}}
        </div>
    </div>
  `,
  data() {
    return { 
        textToShow: 'Here you can put another form instead',
        showFormJournalPublication: true
    }
  },
  methods: {
    set: function (key, data) {
        this.$emit('set', key, data)
    },
    onSuccess: function(response) {
        this.showFormJournalPublication = false;
        this.textToShow = `Response : ${response.message}`;
    },
  }
});
