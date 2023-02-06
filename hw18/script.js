const btnForm = $("#button-form");
const btn = $("#btn");

btn.click(()=> {
    btnForm.addClass("block")
})

btnForm.submit((e) => {
    e.preventDefault()
    btnForm.removeClass("block")
})
