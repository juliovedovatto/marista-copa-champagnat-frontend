import React from "react"
import { Modal } from "react-bootstrap"


type Props = { showModal: boolean, handleClose: (() => void) }
type State = {}

class Component extends React.Component<Props, State> {
  state = { showModal: false }

  render() {
    return (
      <Modal className="modal-tournament-rules" show={this.props.showModal} centered scrollable size="lg" onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>REGULAMENTO DA COPA CHAMPAGNAT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>CAP&Iacute;TULO I</strong></p>
          <p><strong>FINALIDADE E ORGANIZA&Ccedil;&Atilde;O</strong></p>
          <p><strong>Art. 1 - </strong>A Copa Champagnat &eacute; um campeonato corporativo de Futebol Society que tem por finalidade fortalecer a amizade, a integra&ccedil;&atilde;o, a solidariedade e a sociabilidade entre os Irm&atilde;os, colaboradores do Grupo Marista, da Prov&iacute;ncia Marista Brasil Centro-Sul e da FTD Educa&ccedil;&atilde;o e integrantes dos movimentos laicais.</p>
          <p><strong><em>Par&aacute;grafo 1&ordm;- </em></strong><em>A participa&ccedil;&atilde;o e o lazer, e n&atilde;o a competi&ccedil;&atilde;o pura e simples, nortear&atilde;o a m&aacute;xima a Copa Champagnat.</em></p>
          <p><strong><em>Par&aacute;grafo 2&ordm; -</em></strong><em> O evento se prop&otilde;e a incentivar o trabalho desportivo entre os participantes e melhorar a qualidade de vida por meio do esporte.</em></p>
          <p><strong>Art. 2 - </strong>A PMBCS ser&aacute; respons&aacute;vel pela organiza&ccedil;&atilde;o da Copa Champagnat, que ser&aacute; regida pelas regras oficiais da Confedera&ccedil;&atilde;o Brasileira de Futebol Society, e o que dispuser este Regulamento.</p>
          <p><strong>Art. 3 - </strong>Os jogos ser&atilde;o disputados de 01 de julho a 15 de agosto de 2019, na quadra do Centro Marista Champagnat, localizada na Av. Senador Salgado Filho, 1651 &ndash; Guabirotuba, Curitiba/PR.</p>
          <p><strong>CAP&Iacute;TULO II</strong></p>
          <p><strong>DA PARTICIPA&Ccedil;&Atilde;O</strong></p>
          <p><strong>Art. 4 - </strong>A participa&ccedil;&atilde;o no campeonato &eacute; exclusiva para colaboradores do Grupo Marista, da Prov&iacute;ncia Marista Brasil Centro &ndash; Sul, da FTD Educa&ccedil;&atilde;o, Irm&atilde;os e integrantes dos movimentos laicais.</p>
          <p><strong><em>Par&aacute;grafo &uacute;nico</em></strong><em>: Nos dias de jogos ser&aacute; exigida a apresenta&ccedil;&atilde;o de documento com foto e crach&aacute;.</em></p>
          <p><strong>Art. 5 - </strong>As inscri&ccedil;&otilde;es devem ser feitas pelo site www.marista.org.br/copachampagnat at&eacute; o dia 21 de junho, sendo a &uacute;nica forma de ingresso no campeonato, e est&atilde;o restritas a no m&aacute;ximo 18 equipes por categoria.</p>
          <p><em>Par&aacute;grafo &uacute;nico: As substitui&ccedil;&otilde;es dos atletas poder&atilde;o ser feitas at&eacute; 72 horas antes do in&iacute;cio do evento, mediante solicita&ccedil;&atilde;o por e-mail joao.olivei@marista.org.br</em></p>
          <p><strong>Art. 6 -</strong> Todos os atletas inscritos declaram que possuem conhecimento sobre as Leis Desportivas que regem essa modalidade.</p>
          <p><strong>Art. 7 -</strong> Os participantes da Copa dever&atilde;o estar conscientes de suas condi&ccedil;&otilde;es f&iacute;sicas ao se inscreverem, assumindo n&atilde;o terem qualquer impedimento para a pr&aacute;tica esportiva.</p>
          <p><strong>CAP&Iacute;TULO III</strong></p>
          <p><strong>DAS CATEGORIAS E FORMA&Ccedil;&Atilde;O DAS EQUIPES</strong></p>
          <p><strong>Art. 8 - </strong>A Copa Champagnat ser&aacute; disputada nas categorias masculina e mista.</p>
          <p><strong>Art. 9 - </strong>A equipe masculina ser&aacute; composta por no m&iacute;nimo 05 (cinco), sendo 1 goleiro, e no m&aacute;ximo 12 (doze) atletas.</p>
          <p><strong>Art. 10 -</strong> A equipe mista ser&aacute; composta por no m&iacute;nimo 05 (cinco), sendo 01 goleiro do g&ecirc;nero masculino, e no m&aacute;ximo 12 (doze) atletas.</p>
          <p><strong>Art. 11 -</strong> O atleta s&oacute; poder&aacute; participar em uma &uacute;nica equipe e em &uacute;nica uma categoria. Exceto o goleiro, que poder&aacute; participar de uma equipe masculina e uma equipe mista.</p>
          <p><strong>CAP&Iacute;TULO IV</strong></p>
          <p><strong>DOS JOGOS</strong></p>
          <p><strong>Art. 12 - </strong>Caber&aacute; exclusivamente &agrave; Comiss&atilde;o Central Organizadora determinar hor&aacute;rios e tabelas dos jogos.</p>
          <p><strong>Art. 13 - </strong>A Copa ser&aacute; disputada em sistema de chaves a ser apresentada em Congresso T&eacute;cnico no dia 24/06/2019 com os capit&atilde;es via watsapp.</p>
          <p><strong><em>Par&aacute;grafo &uacute;nico: </em></strong><em>as chaves e datas dos jogos ser&atilde;o enviados para o e-mail cadastrado no formul&aacute;rio de inscri&ccedil;&atilde;o e divulgados no site oficial do campeonato (www.marista.org.br/copachampagnat)</em></p>
          <p><strong>Art. 14 - </strong>O campeonato ser&aacute; disputado em fases: disputa no grupo, quartas de final (tr&ecirc;s primeiros colocados), semifinal, disputa pelo 3&ordm; lugar e Final.</p>
          <p><strong>Art. 15 - </strong>Cada partida ter&aacute; dura&ccedil;&atilde;o de 40 (quarenta) minutos, divididos em 02 (dois) tempos de 20 (vinte) minutos cada, com intervalo de 05 (cinco) minutos para descanso, entre a primeira e a segunda etapa, e ser&atilde;o conduzidas por 1 (um) &aacute;rbitro e um mes&aacute;rio.</p>
          <p><strong><em>Par&aacute;grafo &uacute;nico: </em></strong><em>A arbitragem do campeonato ser&aacute; realizada por &aacute;rbitros contratados pela organiza&ccedil;&atilde;o da COPA. A arbitragem &eacute; soberana no decorrer da partida e qualquer decis&atilde;o dever&aacute; ser cumprida.</em></p>
          <p><strong>Art. 16 - </strong>Os atletas dever&atilde;o se apresentar no local da competi&ccedil;&atilde;o com 30 (trinta) minutos de anteced&ecirc;ncia ao hor&aacute;rio designado.</p>
          <p><strong>Art. 17 - </strong>Todos os jogos ter&atilde;o uma toler&acirc;ncia m&aacute;xima de 15 minutos para atrasos.</p>
          <p><strong>Art. 18 - </strong>Cada equipe dever&aacute; jogar devidamente uniformizada, ou seja, com camisas numeradas, cal&ccedil;&otilde;es e meias iguais. Caso as equipes tenham a mesma cor de uniforme, a organiza&ccedil;&atilde;o da Copa fornecer&aacute; coletes para uma das equipes e seu uso ser&aacute; determinado por meio de sorteio.</p>
          <p><strong><em>Par&aacute;grafo &uacute;nico: </em></strong><em>N&atilde;o ser&aacute; permitido o uso de chuteiras com trava de futebol de campo e &eacute; recomendado o uso de caneleiras de prote&ccedil;&atilde;o para todos os atletas participantes.</em></p>
          <p><strong>Art. 19 - </strong>No banco de reservas poder&atilde;o ficar os atletas reservas, o t&eacute;cnico (caso tenha) e auxiliar (caso tenha).</p>
          <p><strong>Art. 20 - </strong>Os jogos dever&atilde;o ser iniciados com 5 jogadores (4 linhas e um goleiro) e terminar com no m&iacute;nimo 4, caso aconte&ccedil;a um imprevisto durante o jogo ou um dos atletas for expulso. Caso sejam expulsos 2 atletas o time automaticamente perde a partida por W.O.</p>
          <p><strong>CAP&Iacute;TULO V</strong></p>
          <p><strong>DA PONTUA&Ccedil;&Atilde;O</strong></p>
          <p><strong>Art. 21 - </strong>A classifica&ccedil;&atilde;o das equipes ser&aacute; por pontos ganhos e cada vit&oacute;ria valer&aacute; 03 (tr&ecirc;s) pontos, empate valer&aacute; 1 (um) ponto e derrota 0 (zero) ponto. O time ausente perder&aacute; 1 (ponto) na classifica&ccedil;&atilde;o geral.</p>
          <p><strong>Art. 22 - </strong>O sistema de desempate adotado nas fases que forem disputadas pelo sistema de rod&iacute;zio ser&aacute; o seguinte:</p>
          <p>A) confronto direto (utilizado somente no caso de empate entre 2 equipes)</p>
          <p>B) saldo de gols nos jogos entre as equipes empatadas</p>
          <p>C) saldo de gols em todos os jogos do grupo na fase</p>
          <p>D) menor n&uacute;mero de cart&otilde;es vermelhos</p>
          <p>E) menor n&uacute;mero de cart&otilde;es amarelos</p>
          <p>F) sorteio</p>
          <p><strong><em>Par&aacute;grafo &uacute;nico: </em></strong><em>Quando ocorrer empate entre 3 (tr&ecirc;s) ou mais equipes, mesmo ap&oacute;s a aplica&ccedil;&atilde;o do sistema de desempate 2 (duas) equipes continuarem empatadas, o crit&eacute;rio que prevalecer&aacute; ser&aacute; o confronto direto.</em></p>
          <p><strong>Art. 23 - </strong>Ocorrendo empate em jogo que necessite apontar um vencedor, ser&aacute; adotado o seguinte crit&eacute;rio:</p>
          <p>a) Prorroga&ccedil;&atilde;o de 5 minutos corridos</p>
          <p>b) Persistindo o empate, ser&atilde;o realizadas tr&ecirc;s cobran&ccedil;as alternadas de</p>
          <p>penalidades</p>
          <p>c) Persistindo o empate, ser&atilde;o realizadas cobran&ccedil;as alternadas de penalidades</p>
          <p>at&eacute; que se obtenha um vencedor</p>
          <p>d) Ser&aacute; permitido o pedido de tempo na prorroga&ccedil;&atilde;o apenas a(s) equipe(s) que tiver (em) direito a ele e n&atilde;o tenha(m) utilizado durante o segundo tempo do per&iacute;odo regulamentar</p>
          <p><strong>CAP&Iacute;TULO VI</strong></p>
          <p><strong>DAS PENALIDADES</strong></p>
          <p><strong>Art. 24 - </strong>Ser&atilde;o aplicadas penas disciplinares e/ou eliminada da competi&ccedil;&atilde;o com perda de pontos e cancelamento dos resultados anteriores, a equipe que:</p>
          <p>a) Incluir atleta(s) irregularmente inscrito(s) ou n&atilde;o inscrito(s)</p>
          <p>b) Causar interrup&ccedil;&atilde;o da partida, sem motivo justo</p>
          <p>c) Provocar brigas, intrigas ou atos que n&atilde;o sejam pertinentes aos objetivos da Copa</p>
          <p>d) Prejudicar o bom andamento da competi&ccedil;&atilde;o</p>
          <p>e) Proferir palavras ou fazer gestos ofensivos &agrave; moral</p>
          <p>f) Agredir ju&iacute;zes, demais autoridades ou advers&aacute;rios</p>
          <p><strong><em>Par&aacute;grafo &uacute;nico: </em></strong><em>se a equipe colocar atleta que deveria cumprir suspens&atilde;o perder&aacute; automaticamente os pontos da partida para o advers&aacute;rio, com placar de 2 x 0.</em></p>
          <p><strong>Art. 25 - </strong>Estar&aacute; automaticamente suspenso(a) por uma partida o(a) atleta que for expulso ou tiver dois cart&otilde;es amarelos.</p>
          <p><strong>CAP&Iacute;TULO VII</strong></p>
          <p><strong>DA PREMIA&Ccedil;&Atilde;O</strong></p>
          <p><strong>Art. 26 - </strong>A Copa Champagnat ter&aacute; as seguintes premia&ccedil;&otilde;es:</p>
          <p>01 trof&eacute;u individual para o campe&atilde;o da categoria masculina</p>
          <p>01 trof&eacute;u individual para o campe&atilde;o da categoria mista</p>
          <p><strong><em>Par&aacute;grafo &uacute;nico: </em></strong><em>Ser&atilde;o premiados com botons comemorativos os jogadores que se destacarem nas categorias.</em></p>
          <p><strong>CAP&Iacute;TULO VIII</strong></p>
          <p><strong>DOS RECURSOS</strong></p>
          <p><strong>Art. 27 - </strong>Caber&aacute; direito de recurso contra irregularidades comprovadas, verificadas durante a realiza&ccedil;&atilde;o da Copa, sempre que o time puder comprovar que outro deixou de cumprir qualquer exig&ecirc;ncia do presente regulamento.</p>
          <p><strong><em>Par&aacute;grafo &uacute;nico:</em></strong><em> O time ter&aacute; prazo para recorrer at&eacute; 02 horas ap&oacute;s a realiza&ccedil;&atilde;o da partida, consignando-o, mediante of&iacute;cio digitado ou manuscrito (caligrafia leg&iacute;vel), ao Conselho Disciplinar/&eacute;tico.</em></p>
          <p><strong>Art. 28 - </strong>Ser&atilde;o competentes para apresentar irregularidades comprovadas, o capit&atilde;o do time, dirigente da delega&ccedil;&atilde;o e/ou o t&eacute;cnico credenciado (caso tenha).</p>
          <p><strong>Art. 29 - </strong>Caber&aacute; ao Conselho Disciplinar/&eacute;tico julgar os recursos.</p>
          <p><strong><em>Par&aacute;grafo &uacute;nico: </em></strong><em>O conselho disciplinar ser&aacute; composto por Lucimeire Paisan Bottin Prigol e Aleomar Ulbrich, colaboradores da PMBCS.</em></p>
          <p><strong>CAP&Iacute;TULO IX</strong></p>
          <p><strong>DAS DISPOSI&Ccedil;&Otilde;ES GERAIS</strong></p>
          <p><strong>Art. 30 - </strong>A abertura da Copa ser&aacute; realizado no dia 01 de julho de 2019, com in&iacute;cio previsto para as 19h no Gin&aacute;sio do CMC.</p>
          <p><strong>Art. 31 - </strong>Desde que relacionado na s&uacute;mula, apresentando-se &agrave; mesa, o atleta poder&aacute; entrar na partida a qualquer tempo.</p>
          <p><strong>Art. 32 - </strong>Das decis&otilde;es da C.C.O., dos Conselhos Disciplinar/&eacute;tico e &aacute;rbitros n&atilde;o caber&atilde;o recursos.</p>
          <p><strong>Art. 33 - </strong>Os meios oficiais de comunica&ccedil;&atilde;o e divulga&ccedil;&atilde;o de informa&ccedil;&otilde;es relativas ao campeonato, pela organiza&ccedil;&atilde;o, ser&atilde;o os e-mail e mensagens de whatsapp cadastrados no formul&aacute;rio de inscri&ccedil;&atilde;o.</p>
          <p><strong>Art. 34 - </strong>Os &aacute;rbitros ser&atilde;o designados pela Comiss&atilde;o Central Organizadora, em hip&oacute;tese alguma poder&atilde;o ser recusados.</p>
          <p><strong>Art. 35 - </strong>Em caso de desist&ecirc;ncia da equipe j&aacute; confirmada, a &aacute;rea ser&aacute; punida, ficando fora da pr&oacute;xima Copa.</p>
          <p><strong>Art. 36 - </strong>Os casos omissos do presente regulamento ser&atilde;o resolvidos pela C.C.O. ouvindo os interessados, desde que isto seja necess&aacute;rio.</p>
          <p><strong>Art. 37 </strong>- Times que se deslocarem de cidade ser&atilde;o respons&aacute;veis por seu transporte e pela hospedagem, sendo que a organiza&ccedil;&atilde;o do evento dar&aacute; prioridade para essas equipes disputarem os jogos aos s&aacute;bados.</p>
        </Modal.Body>
      </Modal>
    )
  }
}

export default Component