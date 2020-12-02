<template>

	<div class='login'>
		<div class='login__container'>
			<form class='login__form'
			      @submit.prevent='submitHandler'>

				<label class='login__label'
				       for='username'><b>Логин</b></label>
				<input class='login__input'
				       name='username'
				       type="email"
				       placeholder='Введите Email'
				       v-model="email"
				       required>

				<label class='login__label'
				       for='password'><b>Пароль</b></label>
				<input class='login__input'
				       name='password'
				       type="password"
				       v-model="password"
				       placeholder='Введите пароль'
				       required>

				<button class='login__button'
				        type='submit'>Войти
				</button>
			</form>
		</div>
	</div>

</template>

<script>

	// IMPORTS

	import { users } from "@/utils/users";
	import { mapActions } from "vuex";
	import router from "@/router";

	// COMPONENT OPTIONS

	export default {
		name: 'Login',
		data: () => ({
			email: '',
			password: ''
		}),
		methods: {
			...mapActions(["addUserStatus"]),
			binarySearch(data, email, password) {
				data.sort((a, b) => a.email.localeCompare(b.email));
				let start = 0;
				let end = data.length - 1;

				let counter = 0;

				while (start <= end) {
					counter++;

					let mid = Math.floor((start + end) / 2);

					if (data[mid].email === email && data[mid].password === password) {
						return data[mid].email;
					}
					else if (data[mid].name < email) start = mid + 1;
					else end = mid - 1;
				}
				return console.log("Wrong data");
			},
			async submitHandler() {
				try {
					if (this.email.includes('@mail.ch')) {
						alert('This user does not have access to the login');
					} else if (this.binarySearch(users, this.email, this.password)) {
						this.addUserStatus(true);
						this.$router.push('/');
					}
				} catch (error) {
					throw new Error(error);
				}
			}
		}
	}

</script>

<style lang='scss' scoped>

	@import "../../assets/styles/utils/vars";

	.login {
		height: 100%;
		display: flex;
		justify-content: center;

		&__container {
			max-width: 400px;
			margin: calc(52px + 10%) 20px 0 20px;
		}

		&__form {
			display: flex;
			flex-direction: column;
		}

		&__label {
			text-align: start;
			margin: 14px 0 0 0;
		}

		&__input {
			width: 100%;
			padding: 8px 8px;
			margin: 4px 0;
			display: inline-block;
			border: 1px solid $color-grey;
			border-radius: 4px;
			box-sizing: border-box;
		}

		&__button {
			background-color: $color-turquoise;
			color: $color-white;
			padding: 8px 20px;
			margin: 8px 0;
			border: none;
			border-radius: 4px;
			cursor: pointer;
			width: 100px;
		}
	}

</style>
