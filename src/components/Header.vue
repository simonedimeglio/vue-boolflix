
<template>
    <header>
        <div class="header-container custom-container">
            <div class="header-logo-nav">
                <img src="../assets/netflix-logo.png" alt="Netflix Logo" />
                <ul>
                    <li>Home</li>
                    <li>Serie Tv</li>
                    <li>Film </li>
                    <li>Originali</li>
                    <li>Aggiunti di recente</li>
                    <li>La mia lista</li>
                </ul>
            </div>
            <div class="header-options">
                <input type="text" v-model="search" @keyup.enter="$emit('search', search)" placeholder="Ricerca titolo">
                <font-awesome-icon icon="search" class="button-icon" @click="$emit('search', search)"/>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            search: ""
        }
    }
}
</script>

<style scoped lang="scss">
header {
    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .header-logo-nav {
            display: flex;
            align-items: center;
            img {
                width: 100px;
                height: 50px;
            }
            ul {
                display: flex;
                li {
                    list-style: none;
                    padding: 0 5px;
                    font-size: 15px;
                    &:hover {
                        cursor: pointer;
                        color: white;
                        transition: 0.3s;
                    }
                }
            }
        }
        .header-options {
            input {
                background-color: black;
                border-style: none;
                color: white;
                border-bottom: .5px solid #e4e4e4;
            }
            .button-icon {
                margin-left: 10px;
                color: #e4e4e4;
                &:hover {
                    color: white;
                    cursor: pointer;
                }
            }
            
        }
    }
}
</style>