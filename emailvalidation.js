var result;
function validate() {
    var Email = document.getElementById("t-email").value;
    var patcheck = new RegExp("^[a-z0-9]");
    if (Email.indexOf("@") > -1) {
        document.getElementById("div2").innerHTML = "";
    } else {
        document.getElementById("div2").innerHTML = "Enter a valid email address";
        document.getElementById("div2").style.color = "Red";

    }
}
function readData() {
    // 2. Initialize the JavaScript client library.
    var CLIENT_ID = '928107325059-qlc78qdmru2qovlutpilhkfe7lh8t6ne.apps.googleusercontent.com';
    var API_KEY = 'AIzaSyBirKcTHzH4zciDX3tKw6qz-bYRmBCtuRk';
    var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
    var SCOPES = "https://www.googleapis.com/auth/spreadsheets";
    gapi.client.init({
      apiKey: API_KEY,
      // clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(function() {
      var spreadsheetId = '1A_7XC1v-dBgWbQTLiYZkLS1FqCihCio0arqjyTUdJ8k';
      var range = 'Sheet1!1:2';
      console.log(gapi.client)
      gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: range
        }).then((response) => {
            result = response.result;
            console.log(result)
            var numRows = result.values ? result.values.length : 0;
            console.log(`${numRows} rows retrieved.`);
        });
    });
};

function writeData(email, pass) {
    // 2. Initialize the JavaScript client library.
    var CLIENT_ID = '548382775066-qfdmd5nb1s3j7dqojsqqbie8htp1ltiv.apps.googleusercontent.com';
    var API_KEY = 'AIzaSyBirKcTHzH4zciDX3tKw6qz-bYRmBCtuRk';
    var clientsecret = '8FU-P2TVaVmsalCIzGGRed1Y';
    var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
    var SCOPES = "https://www.googleapis.com/auth/spreadsheets";
    gapi.client.init({
      apiKey: API_KEY,
    //   clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(function() {
      var spreadsheetId = '1A_7XC1v-dBgWbQTLiYZkLS1FqCihCio0arqjyTUdJ8k';
      var range = 'Sheet1';
      console.log(gapi.client)
      var values = [
        [email,pass]
      ];
      var body = {
        values: values
      };
      gapi.client.sheets.spreadsheets.values.append({
         spreadsheetId: spreadsheetId,
         range: range,
         valueInputOption: 'RAW',
        //  insertDataOption: 'INSERT_ROWS',
         resource: body
      }).then((response) => {
        var result = response.result;
        console.log(`${result.updates.updatedCells} cells appended.`)
      });
    });
};

$(function() {
    $("#t-btn-login").click(function() {
        if (!$("#t-email").val() || !$("#t-pass").val()) {
            document.getElementById("div2").innerHTML = "Enter email and password";
            document.getElementById("div2").style.color = "Red";
        } else {
            if(validateUser($("#t-email").val(), $("#t-pass").val())){
                window.location.href = "https://ac1956.github.io/Hoya-News-Project/News.html";
            } else {
                alert('Invalid Email Id or Password');
            }
        }
    });
    $("#t-btn-signup").click(function() {
        writeData('gou@gou.com','pass');
    });
});

function validateUser(email, pass){
    var flag = 0;
    if(result.values) {
        $.each(result.values, function(index, record) {
            if(index !=0) {
                if(record[0] == email && record[1] == pass) {
                    flag = 1;
                }
            }
        });
    }
    if(flag == 1) {
        return true;
    } else {
        return false;
    }

}