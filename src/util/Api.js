const access_token = "103102658122932";
export const Api = {
  getFeature(num) {
    return fetch(`https://api.allorigins.win/raw?url=https://superheroapi.com/api/${access_token}/${num}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        const json = {
          id: jsonResponse.id,
          name: jsonResponse.name,
          intelligence: jsonResponse.powerstats.intelligence,
          strength: jsonResponse.powerstats.strength,
          speed: jsonResponse.powerstats.speed,
          durability: jsonResponse.powerstats.durability,
          power: jsonResponse.powerstats.power,
          combat: jsonResponse.powerstats.combat,
          fullname: jsonResponse.biography["full-name"],
          alteregos: jsonResponse.biography["alter-egos"],
          alias1: jsonResponse.biography.aliases[0],
          alias2: jsonResponse.biography.aliases[1],
          group: jsonResponse.connections["group-affiliation"],
          work: jsonResponse.work.occupation,
          birthPlace: jsonResponse.biography["place-of-birth"],
          firstAppearence: jsonResponse.biography["first-appearance"],
          race: jsonResponse.appearance.race,
          gender: jsonResponse.appearance.gender,
          height: jsonResponse.appearance.height[1],
          weight: jsonResponse.appearance.weight[1],
          eye: jsonResponse.appearance["eye-color"],
          hair: jsonResponse.appearance["hair-color"],
          alignment: jsonResponse.biography.alignment,
        };
        if (jsonResponse.image) {
          json.image = jsonResponse.image.url;
        }
        return json;
      });
  },
  getSearch(name) {
    return fetch(`https://api.allorigins.win/raw?url=https://superheroapi.com/api/${access_token}/search/${name}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.results) {
          return [];
        }
        return jsonResponse.results.map((result) => {
          const json = {
            id: result.id,
            name: result.name,
            intelligence: result.powerstats.intelligence,
            strength: result.powerstats.strength,
            speed: result.powerstats.speed,
            durability: result.powerstats.durability,
            power: result.powerstats.power,
            combat: result.powerstats.combat,
            fullname: result.biography["full-name"],
            alteregos: result.biography["alter-egos"],
            alias1: result.biography.aliases[0],
            alias2: result.biography.aliases[1],
            group: result.connections["group-affiliation"],
            work: result.work.occupation,
            birthPlace: result.biography["place-of-birth"],
            firstAppearence: result.biography["first-appearance"],
            race: result.appearance.race,
            gender: result.appearance.gender,
            height: result.appearance.height[1],
            weight: result.appearance.weight[1],
            eye: result.appearance["eye-color"],
            hair: result.appearance["hair-color"],
            alignment: result.biography.alignment,
          };
          if (result.image) {
            json.image = result.image.url;
          }
          return json;
        });
      });
  },
};
