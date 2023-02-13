class Grammar {
  constructor(data) {
    this.metadata = data.metadata;
    this.categories = data.categories;
  }

  getCategory(name) {
    return this.categories.find(category => category.name === name);
  }

  getValues(name) {
    const category = this.getCategory(name);
    return category ? category.values : [];
  }

  generateCombinations() {
    const combinations = [];
    if (!this.categories) return combinations;

    function generateCombinationsHelper(combination, index) {
      if (index === this.categories.length) {
        combinations.push(combination);
        return;
      }

      for (const value of this.categories[index].values) {
        generateCombinationsHelper({ ...combination, [this.categories[index].name]: value }, index + 1);
      }
    }

    generateCombinationsHelper({}, 0);
    return combinations;
  }


  generateCombinations() {
    const combinations = [];
    if (!this.categories) return combinations;
    // const self = this; // bind this to self variable

    let  generateCombinationsHelper = (combination, index) => {
      if (index === this.categories.length) {
        combinations.push(combination);
        return;
      }

      for (const value of this.categories[index].values) {
        generateCombinationsHelper({ ...combination, [this.categories[index].name]: value }, index + 1);
      }
    }

    generateCombinationsHelper({}, 0);
    return combinations;
  }
}

const data = {
  "metadata": {
    "title": "Hiligyanon verbal categories",
    "source": "Zorc, R.David. 2006. Hiligaynon. Encyclopedia of Language & Linguistics. doi:10.1016/B0-08-044854-2/04883-5.",
    "url": "https://www.researchgate.net/publication/304041600_Hiligaynon"
  },
  "categories": [
    {
      "name": "voice",
      "values": [
        "active",
        "passive",
        "instrumental",
        "local"
      ]
    },
    {
      "name": "tense",
      "values": [
        "past",
        "progressive",
        "contingent",
        "future"
      ]
    },
    {
      "name": "aspect",
      "values": [
        "punctual",
        "durative",
        "distributive"
      ]
    },
    {
      "name": "mood",
      "values": [
        "factual",
        "command",
        "potential"
      ]
    }
  ]
}

const grammar = new Grammar(data);
// console.log(grammar.getValues("voice")); // ["active", "passive", "instrumental", "local"]
// console.log(grammar.getValues("mood")); // ["factual", "command", "potential"]
console.log(grammar.generateCombinations())