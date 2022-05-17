var Nodo = document.getElementById("Node");
var From = document.getElementById("From");
var To = document.getElementById("To");
var text = document.getElementById("Text");
var arrow = document.getElementById('Arrow');
var Content = document.getElementById("Red");

var nodes = new vis.DataSet();
var edges = new vis.DataSet();

var data = {
  nodes: nodes,
  edges: edges,
};

var options = {
  physics: false,
  nodes: {
    shape: "hexagon",
    size: 20,
    color: {
      border: "rgb(244, 88, 71)",
      background: "rgb(29, 33, 41)",
      highlight: "rgb(244, 88, 71)",
    },
    font: { size: 32, color: "rgb(244, 88, 71)" },
    borderWidth: 2,
    shadow: true,
  },
  edges: {
    width: 2,
    shadow: true,
  },
};

var graph = new vis.Network(Content, data, options);

function Clear() {
  Nodo.value = "";
  From.value = "";
  To.value = "";
  text.value = "";
}

function addNode() {
  if (graph.clustering.findNode(Nodo.value) == Nodo.value && Nodo.value != "") {
    Swal.fire({
      icon: "warning",
      text: "Ese nodo ya existe.",
      title: "Alert",
    });

    return false;
  }

  if (Nodo.value == "") {
    Swal.fire({
      icon: "warning",
      text: "Debe llenar el espacio de nodo.",
      title: "Alert",
    });
    return false;
  }

  nodes.add({
    id: Nodo.value,
    label: Nodo.value,
  });
}

function addEdge() {
  console.log(From.value + To.value);
  if (From.value == "" || To.value == "") {
    Swal.fire({
      icon: "warning",
      text: "Debe llenar al menos un espacio.",
      title: "Alert",
    });
    return false;
  }
  console.log(arrow.value);

  edges.add({
    id: From.value + To.value,
    from: From.value,
    to: To.value,
    label: text.value,
    arrows: arrow.value
  });
}

function Delete() {
  if (Nodo.value == "") {
    Swal.fire({
      icon: "warning",
      text: "Debe llenar el espacio del nodo.",
      title: "Alert",
    });
    return false;
  }
  nodes.remove(Nodo.value);
}

function disconnect() {
  if (From.value == "" && To.value == "") {
    Swal.fire({
      icon: "warning",
      text: "Debe rellenar desde donde se desconecta.",
      title: "Alerta",
    });
    return false;
  }
  edges.remove({ id: From.value + To.value });
}
