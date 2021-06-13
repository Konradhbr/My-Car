<template>
  <div class="chat">
    <div id="disqus_thread"></div>
    <div id="dsq-count-scr" src="//mycar-2.disqus.com/count.js" async></div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  created() {
    (function() {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement('script');
      s.src = 'https://mycar-2.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  },
};
</script>

<style lang="scss" scoped>
.chat {
  padding: 10px;
}
</style>
