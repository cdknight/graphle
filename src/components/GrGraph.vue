<template>
  <div ref="graph" id="graph">
  </div>
  <p style="display: none;">{{ this.fnPlotParams  }}</p>
</template>

<script>
import functionPlot from 'function-plot'
import { mapGetters } from 'vuex'

export default {
  name: 'GrGraph',
  computed: {
      fnPlotParams: function() {

          console.log('computing fnPlotParams');
          var fns = ['x'];

          if (this.todaysGuesses) {
          console.log(this.todaysGuesses[0]);
            if (this.todaysGuesses.length > 0) {
              fns = fns.concat(this.todaysGuesses);
                console.log(fns)
            }
          }

          var data = [];
          fns.forEach(function (fn) {
              data.push({ fn })
          });

          var plotParams = {
            target: "#graph",
            width: 600,
            height: 400,
            grid: true,
            data
          };

         functionPlot(plotParams)
         return plotParams;

      },
      ...mapGetters(['todaysGuesses']),
  },
     // this is awful
     mounted: function() {
         functionPlot(this.fnPlotParams);
     }
}
</script>
