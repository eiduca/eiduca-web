import { Calendar, CircleDollarSign, FileBadge, FilePenLine, FileStack, School, SquareTerminal, User, Users, UsersRound } from "lucide-vue-next";
import Submenu from "./submenu";
import MenuLink from "./menu.link";
import MenuApp from "./menu-app";
import { LinkNav } from "./link-nsvigation";

export default class AdminMenu {

    static MEMU: MenuLink[] = [

        MenuLink.create().title("Utilizador").icon(User).isActive(true).permission("").items([
            Submenu.create().title("Funcionário").url("/auth").permission("").build(),
            Submenu.create().title("Candidatos").url("/auth/candidates").permission("").build(),
            Submenu.create().title("Professor").url("/auth/teachers").permission("").build(),
            Submenu.create().title("Estudante").url("/auth/students").permission("").build(),
            Submenu.create().title("Encarregados").url("/auth").permission("").build(),
        ]).build(),

        MenuLink.create().title("Configuração").icon(SquareTerminal).isActive(false).permission("").items([
            Submenu.create().title("Cargo").url(LinkNav.ROLE).permission("").build(),
            Submenu.create().title("Permissão").url(LinkNav.PERMISSION).permission("").build(),
            Submenu.create().title("Definições").url("").permission("").build(),
        ]).build(),

        MenuLink.create().title("Gestão acadêmica").icon(Calendar).isActive(false).permission("").icon(School).items([
            Submenu.create().title("Ano lectivo").url("").permission("").build(),
            Submenu.create().title("Trimestre").url("").permission("").build(),
            Submenu.create().title("Periodo").url("").permission("").build(),
            Submenu.create().title("Curso").url("").permission("").build(),
            Submenu.create().title("Disciplina").url("").permission("").build(),
            Submenu.create().title("Turma").url("").permission("").build(),
            Submenu.create().title("Matricula").url("").permission("").build(),
            Submenu.create().title("Horário").url("").permission("").build(),
        ]).build(),

        MenuLink.create().title("Gestão candidatura").icon(Calendar).isActive(false).permission("").icon(Users).items([
            Submenu.create().title("Calendario").url("").permission("").build(),
            Submenu.create().title("Candidaturas").url("").permission("").build(),
        ]).build(),

        MenuLink.create().title("Gestão financeira").icon(Calendar).isActive(false).permission("").icon(CircleDollarSign).items([
            Submenu.create().title("Artigos").url("").permission("").build(),
            Submenu.create().title("Propinas").url("").permission("").build(),
            Submenu.create().title("Pagamento").url("").permission("").build(),
            Submenu.create().title("Multas").url("").permission("").build(),
        ]).build(),

        MenuLink.create().title("Gestão de avaliação").icon(Calendar).isActive(false).permission("").icon(FileBadge).items([
            Submenu.create().title("Calendário").url("").permission("").build(),
            Submenu.create().title("Notas").url("").permission("").build(),
        ]).build(),

    ];

    static APP: MenuApp[] = [
        MenuApp.create().name("Editor candidatura").url("").permission("").icon(UsersRound).build(),
        MenuApp.create().name("Editor calendário").url("").permission("").icon(Calendar).build(),
        MenuApp.create().name("Editor de documento").url("").permission("").icon(FilePenLine).build(),
        MenuApp.create().name("Gestor de plano de estudo").url("").permission("").icon(FileStack).build(),
    ];

}