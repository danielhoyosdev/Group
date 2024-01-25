import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, KeyboardAvoidingView, TextInput, Alert, Switch } from 'react-native'

// Components
import { ButtonComponent, InputComponent, TextComponent, TitleComponent } from '../Components'

// Constantes
import { assets } from '../../assets/index'
import { strings } from '../../utils/strings'
import { color, font_family, size } from '../../utils/constants'
import SelectDropdown from 'react-native-select-dropdown'

const RegisterScreen = () => {
	// States
	const [names, setNames] = useState("");
	const [genre, setGenre] = useState("");

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState(0);

	const [user, setUser] = useState("");
	const [profilePrivate, setProfilePrivate] = useState(false)

	const genres = ["Masculino", "Femenino", "Otro"]
	const icon = () => (<Text style={{ color: color.white, fontSize: size.XL}}>&#x2607;</Text>)

	return (
			<ImageBackground source={assets.bg_register} style={styles.background__image}>
				<KeyboardAvoidingView behavior="height" style={styles.container}>
					<TitleComponent text_msg={strings.title_register} />
					<TextComponent text_msg={strings.register_msg} />

					<View>
						<TextComponent  text_msg='Datos personales' font_size={size.XL} font_type={font_family.bold} style={{ marginBottom: size.XXL }}/>
						<InputComponent
							placeholder={strings.names}
							on_change={(names:string) => setNames(names)}
							value={names}/>

						<SelectDropdown 
							buttonStyle={{ width: "100%", backgroundColor: color.white_alpa, borderRadius: size.XXS }}
							buttonTextStyle={{ color: color.white, textAlign: "left", fontSize: size.MD, fontFamily: font_family.regular }}
							dropdownStyle={{ borderRadius: size.XXS, backgroundColor: color.white }} 
							defaultButtonText='Genero'
							data={genres}
							dropdownIconPosition='right'
							renderDropdownIcon={icon}
							onSelect={(genre, index) => setGenre(genre)}
						/>

						<ButtonComponent 
							text={strings.next}
							on_press={() => Alert.alert(`Nombre: ${names}\n\nGenero:${genre}`)}
						/>
					</View>

					<View>
						<TextComponent  text_msg='Datos de la cuenta' font_size={size.XL} font_type={font_family.bold} style={{ marginBottom: size.XXL }}/>
						<InputComponent
							placeholder={strings.email}
							keyboard_type='email-address'
							on_change={(email:string) => setEmail(email)}
							value={email}/>

						<InputComponent
							placeholder={strings.password}
							on_change={(password:string) => setPassword(password)}
							secure_text={true}
							value={password}/>

						<InputComponent
							placeholder={strings.phone}
							on_change={(phone:number) => setPhone(phone)}
							keyboard_type='number-pad'
							value={phone}/>
						
						<ButtonComponent 
							text={strings.next}
							on_press={() => Alert.alert(`Email: ${names}\n\nPassword:${genre}\n\nPhone:${phone}`)}
						/>
					</View>

					<View>
						<TextComponent  text_msg='Usuario' font_size={size.XL} font_type={font_family.bold} style={{ marginBottom: size.XXL }}/>

						<InputComponent
							placeholder={strings.user}
							on_change={(user:string) => setUser(user)}
							value={user}/>

						<View style={{ display: "flex", flexDirection: "row", width: "100%", height: 50, alignItems: "center" }}>
							<Text style={{ color: color.white, marginRight: size.LG, fontSize: size.MD}}>Perfil privado:</Text>
							<Switch
									trackColor={{false: '#d4d4d4', true: '#ff8500'}}
									thumbColor={profilePrivate ? '#fff' : '#fff'}
									onValueChange={() => setProfilePrivate(!profilePrivate)}
									value={profilePrivate}
								/>
						</View>

						<ButtonComponent 
							text={strings.title_register}
							on_press={() => Alert.alert(`Email: ${names}\n\nPassword:${genre}\n\nPhone:${phone}`)}
						/>
					</View>
				</KeyboardAvoidingView>
			</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: size.XXL,
		justifyContent: "flex-end",
	},
	background__image: {
		flex: 1,
	},
});

export default RegisterScreen