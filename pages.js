
export default (data)=>{
    let state =`state= ${JSON.stringify(data)};`
    return {
    
    home:` <input type="button" value="click me" id="btn" />
    <script>
    ${state}
    function post(obj){
        window.ReactNativeWebView.postMessage(JSON.stringify(obj));
        return true
      }
      var btn = document.getElementById('btn')
      btn.addEventListener("click",function (){
          state.html="about"
        post(state)
      })
    </script>`,
    about:`<div id="txt">about page</div>
    <script>
    ${state}
    function post(obj){
        window.ReactNativeWebView.postMessage(JSON.stringify(obj));
        return true
      }
      var btn = document.getElementById('btn')
      btn.addEventListener("click",function (){
          state.title="fuck"
        post(state)
      })
    </script>
    ` 
}}