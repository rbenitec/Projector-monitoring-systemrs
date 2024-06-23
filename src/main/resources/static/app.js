/*Define la url del websocket*/
const stompClient = new StompJs.Client({
    brokerURL: 'ws://localhost:8081/gs-guide-websocket'
});

/* Conectar al topico del websocket y susbcribirse al topico '/topic/greetings' */
stompClient.onConnect = (frame) => {
    debugger;
    setConnected(true);
    console.log('Connected: ' + frame);
    stompClient.subscribe('/topic/greetings', (greeting) => {
        showGreeting(JSON.parse(greeting.body).content);
    });
};

stompClient.onWebSocketError = (error) => {
    debugger;
    console.error('Error with websocket', error);
};

stompClient.onStompError = (frame) => {
    debugger;
    console.error('Broker reported error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
};

function setConnected(connected) {
    debugger;
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    debugger;
    stompClient.activate();
}

function disconnect() {
    debugger;
    stompClient.deactivate();
    setConnected(false);
    console.log("Disconnected");
}

function sendName() {
    debugger;
    stompClient.publish({
        destination: "/app/hello",
        body: JSON.stringify({'name': $("#name").val()})
    });
}

function showGreeting(message) {
    debugger;
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    debugger;
    $("form").on('submit', (e) => e.preventDefault());
    $( "#connect" ).click(() => connect());
    $( "#disconnect" ).click(() => disconnect());
    $( "#send" ).click(() => sendName());
});

