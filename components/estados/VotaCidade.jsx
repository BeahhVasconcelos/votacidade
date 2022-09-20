import { View, Text, Button } from 'react-native'

const VotaCidade = () => {
    const [contIbicuitinga, setContIbicuitinga] = useState(0);
    const [contQuixada, setContQuixada] = useState(0);
    const [contQuixeramobim, setContQuixeramobim] = useState(0);
    const [mostrarVencedor, setMostrarVencedor] = useState(false);
    function vencedor() {
      if (contQuixada > contIbicuitinga && contQuixada > contQuixeramobim) {
        return "Cidade Vencedora: Quixadá " + contQuixada;
      }
  
      if (contIbicuitinga > contQuixada && contIbicuitinga > contQuixeramobim) {
        return "Cidade Vencedora: Ibicuitinga " + contIbicuitinga;
      }
  
      if (contQuixeramobim > contQuixada && contQuixeramobim > contIbicuitinga) {
        return "Cidade Vencedora: Quixeramobim " + contQuixeramobim;
      }
    }
    return (
      <View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Quixadá: {contQuixada}{" "}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Quixeramobim: {contQuixeramobim}{" "}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Ibicuitinga: {contIbicuitinga}{" "}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
        >
          <View style={{ margin: 5 }}>
            <Button
              onPress={() => {
                setContQuixada(contQuixada + 1);
              }}
              title="Quixadá"
            />
          </View>
          <View style={{ margin: 5 }}>
            <Button
              onPress={() => setContQuixeramobim(contQuixeramobim + 1)}
              title="Quixeramobim"
            />
          </View>
          <View style={{ margin: 5 }}>
            <Button
              onPress={() => setContIbicuitinga(contIbicuitinga + 1)}
              title="Ibicuitinga"
            />
          </View>
        </View>
        <Button
              onPress={() => setMostrarVencedor(true)}
              title="Mostrar cidade vencedora"
            />
        {mostrarVencedor && vencedor()}
      </View>
    );
  
}
export default VotaCidade