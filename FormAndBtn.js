//グローバルでswich_btnを定義して一問目のボタンの情報を代入。search_fieldは隠す要素。
window.addEventListener("DOMContentLoaded", () => {
    // const switch_btn = document.getElementById("switch_btn");
    const search_field = document.getElementById("search_field");
    })

    //f.q1.value（フォームのq1の値）を判定する関数
    //ドーナッツまたはどーなっつの場合は、f.q1.value（フォームのq1の値）を〇に
    //そうでなければ×に
    function kotae()
    {
    if(f.q1.value == "ドーナッツ" || f.q1.value == "どーなっつ" || f.q1.value == "ドーナツ" || f.q1.value == "どーなつ" || f.q1.value == "LEVEL2_CLEARE___01011") {
        f.q1.value="LEVEL2_CLEARE___01011";
    }else {
        f.q1.value="False___try_again";
    }

    if(getComputedStyle(search_field).display == "none" && f.q1.value == "LEVEL2_CLEARE___01011" ){
        search_field.style.display = "block";
        } else {
        search_field.style.display = "none";
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