
<template>
    <header>
        <div class="header-container custom-container">

            <div class="header-logo-nav">
                <img src="../assets/netflix-logo.svg" alt="Netflix Logo" />
                <ul>
                    <li>Home</li>
                    <li>Movies</li>
                    <li>Tv Series </li>
                    <li>New and Popular</li>
                    <li>My List</li>
                </ul>
            </div>

            <div class="header-options">
                <input type="text" v-model="search" @keyup.enter="$emit('search', search)" placeholder="Search for movies and TV series">
                <i class="fas fa-search" @click="$emit('search', search)"/>
                <i class="fas fa-bell"></i>
                <img src="../assets/avatar.png" class="user-avatar" alt="User Avatar">
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
                    color: white;
                    &:hover {
                        cursor: pointer;
                        color: $main-txt-color;
                        transition: 0.3s;
                    }
                }
            }
        }
        .header-options {
            display: flex;
            align-items: center;
            input {
                width: 250px;
                font-size: 12px;
                color: white;
                background-color: $main-bg-color;
                border-style: none;
                border-bottom: .5px solid white;
                &:hover {
                    color: $main-txt-color;
                    border-bottom-color: $main-txt-color;
                    opacity: 0.8;
                }
            }
            i {
                margin:0 10px;
                color: $main-txt-color;
                transition: color 1s, transform .5s;
                &:hover {
                    color: white;
                    cursor: pointer;
                }
                &:last-child {
                    margin-left: 2px;
                    
                }
            }
            .user-avatar {
                width: 30px;
                margin-left: 10px;
                margin-right: 5px;
                border-radius: 2px;
                opacity: .8;
                &:hover {
                    cursor: pointer;
                    opacity: 1;
                }
            }
            .fa-sort-down {
                &:hover {
                    transform: rotateX(180deg);
                }
            }
        }
    }
}
</style>