$(document).ready(() => {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow", true);

  xhr.onload = function () {
    fillList();
  };
  xhr.send();

  function addStripes() {
    $("table tr").removeClass("striped");
    $("table tr:nth-child(even)").addClass("striped");
  }

  function afterRender() {
    $("table th").css("color", "darkBlue");
    addStripes();

    $("table tr").on("mouseenter", (event) => {
      $(event.currentTarget).css("backgroundColor", "yellow");
    });

    $("table tr").on("mouseleave", (event) => {
      $(event.currentTarget).removeAttr("style");
    });

    setTimeout(function () {
      const hideElements = $("table a:contains('p')").filter(function () {
        return this.innerHTML.indexOf("p") == 0;
      });
      hideElements.closest("tr").remove();
      addStripes();

      $("<div></div>")
        .insertAfter($("#hb-template"))
        .text("Skriveno:" + hideElements.length);
    }, 2000);
  }

  function fillList(pokemons) {
    const data = JSON.parse(xhr.response);
    const source = document.getElementById("hb-template").innerHTML;
    const destination = document.getElementById("hb-result");
    const template = Handlebars.compile(source);
    const html = template(context);
    const context = {
      pokemon: data.pokemon_species.slice(0, 20),
      tableClass: "table",
    };
    document.getElementById("hb-result").innerHTML = html;

    $('[data-toggle="popover"]').popover();
    afterRender();
  }

  getPokemons().then((pkmns) => fillList(pkmns));

  $(window).resize(() => {
    console.log($(window).width());
  });
});
