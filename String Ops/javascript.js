function StringFunctions(){

    var string1 = new myString(document.getElementById("text1").value);
    var string2 = new myString(document.getElementById("text2").value);
    var result = new myString(document.getElementById("text4").value);

    if (document.getElementById('len').checked) {
        var len1 = string1.mylength();
        alert(len1);
    } else if (document.getElementById('concat').checked) {
        var concat1 = string1.myconcat(string2);
        result.value = concat1;
        //alert(concat1);
    } else if (document.getElementById('substring').checked) {
        var x = document.getElementById("text2").value;
        var y = document.getElementById("text3").value;
        var substring1 = string1.mysubstring(x,y);
        alert(substring1);
    } else if (document.getElementById('char_at').checked) {
        var x = document.getElementById("text2").value;
        var char1 = string1.mycharat(x);
        alert(char1);
    }
    else if (document.getElementById('lastindexof').checked) {
        var lastindex = string1.mylastindex(string2);
        alert(lastindex);
    }
    else if (document.getElementById('indexof').checked) {
        var index1 = string1.myindexof(string2);
        alert(index1);
    }
    else if (document.getElementById('replace').checked) {
        var p = document.getElementById("text2").value;
        var q = document.getElementById("text3").value;
        var replace1 = string1.myreplace(p,q);
        alert(replace1);
    }
}

var myString = function (val) {
    this.value = val;

    this.mylength = function () {
        var i = 0,str_len = 0;
        for (i = 0; this.value[i] != null; i++)
            str_len++;
        return str_len;
    }

    this.myconcat = function (str1) {
        var concat2 = this.value + str1.value;
        return concat2;
    }

    this.mysubstring = function (a, b) {
        var sub_string;
        for(var k=a;k<b;k++)
            sub_string += this.value[k];
       // debugger;
        return sub_string;
        }


      

    this.mycharat = function (a) {
        var char2 = this.value[a];
        return char2;
    }

    this.mylastindex = function (str2) {
        for (var i = this.myLen - 1; i >= 0; i--) {
            if (this.value[i] == str2.value) {
                return i;
            }
        }
        return -1;
    }

    this.myindexof = function (str3) {
        var index2 = this.value.indexOf(str3.value);
        return index2;
    }

    this.myreplace = function (str4,str5) {
       // var replace2 = this.value.replace(str4.value, str5.value);
        // return replace2;
        var i = this.value.indexOf(str4);
        var j = 0;
        var res = this.value;
        for (var k = i; i < str4.Length; k++) {
            this.value[k] = rep[j];
            j++;
        }
        return this.value;
    }
}