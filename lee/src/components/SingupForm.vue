<template>
  <form>
    <label>Email</label>
    <input type="email" required v-model="email">

    <label>Password</label>
    <input type="password" required v-model="password">

    <select v-model="role">
      <option value="Developer">DBLee</option>
      <option value="Designer">DGLee</option>
    </select>

    <label>SKILLS:</label>
    <input type="text" v-model="temSkill" @keyup.alt="addSkills">
    <div v-for="skill in skills" :key="skill" class="pill">
      {{ skill }}
    </div>

    <div class="terms">
      <input type="checkbox" required  v-model="term">
      <label>Accept for the condition</label>
    </div>

    <div>
      <input type="checkbox" value="Lee1" v-model="names">
      <label>Lee1</label>
    </div>
    <div>
      <input type="checkbox" value="Lee2" v-model="names">
      <label>Lee2</label>
    </div>
    <div>
      <input type="checkbox" value="Lee3" v-model="names">
      <label>Lee3</label>
    </div>

    <div>

    </div>
  </form>
  <p>Email:{{email}}</p>
  <p>Password:{{password}}</p>
  <p>Role: {{role}}</p>
  <p>Check:{{term}}</p>
  <p>Nams:{{names}}</p>

</template>

<script>
export default {
  data() {
    return {
      email:'',
      password:'',
      role:'Role',
      term:true,
      names:[],
      temSkill:'',
      skills:[]
    }
  },
  methods: {
    addSkills(e){
      if(e.key === ',' && this.temSkill){
        if(this.skills.includes(this.temSkill)){
          this.skills.push(this.temSkill)
        }
        this.temSkill = ''
      }
    }
  },
}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"]{
    display: inline-block;
    width: 10px;
    margin: 0 10px 0 0;
    position: relative;
  }
</style>