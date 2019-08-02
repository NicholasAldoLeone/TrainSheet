var firebaseConfig = {
  apiKey: "AIzaSyD9fTnxNhTGVjsghPFGAsD3BZzjeHtkvRg",
  authDomain: "train-hw-f60d2.firebaseapp.com",
  databaseURL: "https://train-hw-f60d2.firebaseio.com",
  projectId: "train-hw-f60d2",
  storageBucket: "",
  messagingSenderId: "68266235936",
  appId: "1:68266235936:web:e539d5b9dfd1f07f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

database = firebase.database();

  var name;
  var destination;
  var tFrequency;
  var firstTime;
  
  $("#add-train-btn").on("click", function(){
    event.preventDefault();
    
    name = $("#train-name-input").val();
    destination = $("#destination-input").val();
    tFrequency = $("#frequency-input").val();
    firstTime = $("#first-input").val();

    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);
    
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);
    
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);
    
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
     
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    console.log(name);
    console.log(destination);
    console.log(tFrequency);
    console.log(firstTime);
    console.log(moment(nextTrain).format("hh:mm"));
    console.log(tMinutesTillTrain);

    arrive = moment(nextTrain).format("hh:mm");

    trainName = $("<th>").text(name);
    trainDestination = $("<th>").text(destination);
    trainFrequency = $("<th>").text(tFrequency);
    trainNextTrain = $("<th>").text(arrive);
    trainArrivesIn = $("<th>").text(tMinutesTillTrain);
    
    trainTable = $("<tr>");
    
    trainTable.append(trainName);
    trainTable.append(trainDestination);
    trainTable.append(trainFrequency);
    trainTable.append(trainNextTrain);
    trainTable.append(trainArrivesIn);

    
    $("thead").append(trainTable);

  })