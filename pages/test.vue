<template>
  <div class="overflow-auto">
    <div class="d-flex">
      <div class="flex-fill">
        <b-btn to="/" variant="outline-primary" class="m-1">Задачи</b-btn>
      </div>
    </div>
    <div class="">
      <div class="d-flex">
        <div class="flex-fill">
          <h2 class="bg-light p-2 m-2">Question</h2>
          <pre>
          Create function add:

          alert( add(1) ) // showing '1'
          alert( add(1)(9) ) // showing '10'
          alert( add(4)(4)(4) ) // showing '12'

          function add(n) {
            ...
          }
        </pre
          >
        </div>
        <div class="flex-fill">
          <h2 class="bg-light p-2 m-2">Answer</h2>
          <pre>
          add(n) {
            let sum = n
            const fn = (b) => {
              sum += b
              return fn
            }
            fn.toString = () => sum
            return fn
          }
        </pre
          >
        </div>
      </div>
      <hr />
      <div class="px-5">
        <h2 class="bg-light p-2 m-2">Result</h2>
        <table class="table-dark table-striped table">
          <tbody>
            <tr>
              <td>add(1)</td>
              <td>{{ add(1) }}</td>
            </tr>
            <tr>
              <td>add(1)(9)</td>
              <td>{{ add(1)(9) }}</td>
            </tr>
            <tr>
              <td>add(4)(4)(4)</td>
              <td>{{ add(4)(4)(4) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      sum: 0,
    }
  },
  methods: {
    add(n) {
      let sum = n
      const fn = (b) => {
        sum += b
        return fn
      }
      fn.toString = () => sum
      return fn
    },
  },
}
</script>

<style scoped></style>
