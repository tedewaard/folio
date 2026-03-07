package handlers

import (
	"net/http"

	"github.com/tedewaard/folio/src/templates"
)

// HandleHome renders the home page
func HandleHome(w http.ResponseWriter, r *http.Request) {
	component := templates.HomePage()
	component.Render(r.Context(), w)
}
