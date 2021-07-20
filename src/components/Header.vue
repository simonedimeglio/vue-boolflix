
<template>
    <header>
        <div class="header-container custom-container">
            <div class="header-logo-nav">
                <img src="../assets/netflix-logo.svg" alt="Netflix Logo" />
                <ul>
                    <li>Home</li>
                    <li>Serie Tv</li>
                    <li>Film </li>
                    <li>Nuovi e popolari</li>
                    <li>La mia lista</li>
                </ul>
            </div>
            <div class="header-options">
                <input type="text" v-model="search" @keyup.enter="$emit('search', search)" placeholder="Ricerca per titoli">
                <i class="fas fa-search" @click="$emit('search', search)"/>
                <i class="fas fa-bell"></i>
                <i class="fas fa-user"></i>
                <i class="fas fa-sort-down"></i>
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
@import "../style/_colors.scss";
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
                background-color: $main-bg-color;
                border-style: none;
                color: white;
                border-bottom: .5px solid #e4e4e4;
            }
            i {
                margin-left: 10px;
                color: #e4e4e4;
                &:hover {
                    color: white;
                    cursor: pointer;
                }
                &:last-child {
                    margin-left: 2px;
                }
            }
            
        }
    }
}
</style>