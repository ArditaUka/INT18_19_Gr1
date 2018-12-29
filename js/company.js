<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $(".js1").click(function(){
    $("js").slideDown("slow");
  });
});
</script>
<style>
.js {
    display: none;
}
 .js ,js1 {
    line-height: 30px;
    margin: auto;
    font-size: 16px;
    padding: 5px;
    text-align: center;
    background: #555;
    border: solid 1px #666;
    color: #ffffff;
    border-radius: 3px;
    user-select: none;
}
.p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>
