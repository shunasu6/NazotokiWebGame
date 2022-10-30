//グローバルでswich_btnを定義して一問目のボタンの情報を代入。search_fieldは隠す要素。
window.addEventListener("DOMContentLoaded", () => {
    // const switch_btn = document.getElementById("switch_btn");
    const search_field0 = document.getElementById("search_field0");
    const search_field = document.getElementById("search_field");
    const search_field_2 = document.getElementById("search_field_2");
    })

    //f.q1.value（フォームのq1の値）を判定する関数
    //ドーナッツまたはどーなっつの場合は、f.q1.value（フォームのq1の値）を〇に
    //そうでなければ×に

    function kotae()
    {
    if(f.q1.value == "オールクリア" || f.q1.value == "おーるくりあ" || f.q1.value == "ドーナッツ" || f.q1.value == "どーなつ" || f.q1.value == "LEVEL1_CLEARE___01011") {
        f.q1.value="LEVEL1_CLEARE___01011";
    }else {
        f.q1.value="False___try_again";
    }

    if(getComputedStyle(search_field).display == "none" && f.q1.value == "LEVEL1_CLEARE___01011" ){
        search_field.style.display = "block";
        } else {
        search_field.style.display = "none";
        }}

    function kotae2()
    {
    if(f2.q1.value == "222" || f2.q1.value == "２２２" || f2.q1.value == "ドーナツ" || f2.q1.value == "どーなつ" || f2.q1.value == "LEVEL2_CLEARE___01011") {
        f2.q1.value="LEVEL2_CLEARE___01011";
    }else {
        f2.q1.value="False___try_again";
    }

    if(getComputedStyle(search_field_2).display == "none" && f2.q1.value == "LEVEL2_CLEARE___01011" ){
        search_field_2.style.display = "block";
        search_field0.style.display = "none";
        } else {
        search_field_2.style.display = "none";
        search_field0.style.display = "block";
        }}

    

//switch_btn（一問目ボタン）がクリックされたときに発火。
//もしsearch_field（隠された要素）の表示 が none（非表示）だった場合
//search_field（隠された要素）の表示 を block（ブロックレベル要素の表示）に。
//そうでなければ
//search_field（隠された要素）の表示 を none（非表示）に。

//switch_btn.addEventListener("click", () => {
//if(getComputedStyle(search_field).display == "none" && f.q1.value == "LEVEL2_CLEARE___0101011101101011101011101" ){
//    search_field.style.display = "block";
//    } else {
//    search_field.style.display = "none";
//    }
//  })
//})